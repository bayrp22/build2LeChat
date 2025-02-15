import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Settings, Edit, Camera, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import './ProfilePage.css';
import Overview from '../components/Overview';
import MyActivity from '../components/MyActivity';
import ResumeCV from '../components/ResumeCV';
import ProfessionalGallery from '../components/ProfessionalGallery';
import Connections from '../components/Connections';
import ProfileUpdate from '../components/ProfileUpdate';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfileUpdate, setShowProfileUpdate] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from('custom_users')
          .select('*')
          .eq('id', userId)
          .single();

        if (error) throw error;
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="profile-container">
      <section className="profile-header-section">
        <div className="profile-header-content">
          <div className="avatar-container">
            <img
              src={user.avatar_url || '/default-avatar.png'}
              alt="Profile"
              className="profile-avatar"
            />
            <button className="camera-btn">
              <Camera size={20} />
            </button>
          </div>
          <div className="profile-info">
            <h1>{user.username}</h1>
            <p className="profile-title">{user.position || 'Senior UX Designer'}</p>
            <button
              className="edit-profile-btn"
              onClick={() => setShowProfileUpdate(true)}
            >
              <Edit size={18} />
              Edit Profile
            </button>
          </div>
          <button className="settings-btn">
            <Settings size={24} />
          </button>
        </div>
      </section>

      <main className="profile-main">
        <Tabs selectedIndex={activeTab} onSelect={setActiveTab}>
          <TabList className="tab-list">
            <Tab>Overview</Tab>
            <Tab>My Activity</Tab>
            <Tab>Resume/CV</Tab>
            <Tab>Professional Gallery</Tab>
            <Tab>Connections</Tab>
          </TabList>

          <TabPanel>
            <Overview user={user} />
          </TabPanel>
          <TabPanel>
            <MyActivity />
          </TabPanel>
          <TabPanel>
            <ResumeCV />
          </TabPanel>
          <TabPanel>
            <ProfessionalGallery />
          </TabPanel>
          <TabPanel>
            <Connections />
          </TabPanel>
        </Tabs>

        <div className="social-links">
          {[
            { icon: <Linkedin size={24} />, href: "#" },
            { icon: <Twitter size={24} />, href: "#" },
            { icon: <Instagram size={24} />, href: "#" },
            { icon: <Mail size={24} />, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </main>

      {showProfileUpdate && (
        <div className="profile-update-modal">
          <ProfileUpdate
            user={user}
            onClose={() => setShowProfileUpdate(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
