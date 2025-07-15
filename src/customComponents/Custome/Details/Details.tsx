import React from "react";
import styles from "./Details.module.css";
import { ProjectData } from "../../interfaces";

type CampaignDetailsProps = {
  projectData: ProjectData;
  setActiveView: (value: string) => void;
};

const CampaignDetails: React.FC<CampaignDetailsProps> = ({ projectData, setActiveView }) => {
  const campaign = {
    id: projectData.id || "12345",
    title: projectData.repo || "Please enter a title",
    subtitle: projectData.title,
    leads: projectData.leads || 0,
    url: projectData.homepage || "https://example.com/campaign",
    type: projectData.campaignType || "Digital",
    startDate: projectData.startDate || "2023-01-01",
    endDate: projectData.endDate || "2023-12-31",
    objective: projectData.description || "Aumentar la conciencia sobre el reciclaje",
    manager: "Juan Pérez",
    visits: 20000,
    ctr: "5%",
    bounceRate: "30%",
    avgTime: "2 min 30 sec",
    progress: 75,
    status: "En Progreso",
    startDateFull: "1 de enero de 2023",
    endDateFull: "31 de diciembre de 2023",
    daysElapsed: 150,
    daysRemaining: 215,
    ownerInitial: "JP",
    owner: "Juan Pérez",
  };
  const back = () => {
    setActiveView("all");
  };
  const formatTypesNames = (type: string) => {
    switch (type) {
      case "SB":
        return "Submission Builder Campaign";
      case "PD":
        return "Politicall Direct Campaign";
    case "AP":
        return "Alert the Press Campaign";
      default:
        return "Unknown Campaign Type";
    }
  };
  return (

      <div className={styles.contentAll}>
        <div className={styles.campaignContainer}>
          <div className={styles.campaignHeader}>
            <div className={styles.campaignTitleContainer}>
              <div className={styles.campaignId}>ID: {campaign.id}</div>
              <h1 className={styles.campaignTitle}>{campaign.title}</h1>
              <p className={styles.campaignSubtitle}>{campaign.objective}</p>
              <div className={styles.headerStats}>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>{campaign.leads}</span>
                  <span className={styles.statLabel}>Leads</span>
                </div>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>
                    {campaign.visits}
                  </span>
                  <span className={styles.statLabel}>Email sended </span>
                </div>

              </div>
            </div>
          </div>

          <div className={styles.campaignBody}>
            <div className={styles.mainContent}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <i className="fas fa-info-circle"></i>
                    General Information  
                </h2>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-link"></i>
                      URL Campaign
                    </span>
                    <a
                      href={campaign.url}
                      className={`${styles.infoValue} ${styles.urlValue}`}
                      target="_blank"
                    >
                      {campaign.url}
                    </a>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-tags"></i>
                      Campaign Type
                    </span>
                    <span className={styles.infoValue}>{formatTypesNames(campaign.type)}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-calendar-alt"></i>
                      Start Date
                    </span>
                    <span className={styles.infoValue}>
                      {campaign.startDate}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-calendar-check"></i>
                      End Date
                    </span>
                    <span className={styles.infoValue}>{campaign.endDate}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-bullseye"></i>
                      Objective
                    </span>
                    <span className={styles.infoValue}>
                      {campaign.objective}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-user-tie"></i>
                      Responsible
                    </span>
                    <span className={styles.infoValue}>{campaign.manager}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.statusCard}>
                <h2 className={styles.statusTitle}>
                  <i className="fas fa-clipboard-check"></i>
                  Current Status
                </h2>
                <div className={styles.statusIndicator}>
                  <div className={styles.indicatorDot}></div>
                  <div className={styles.indicatorText}>{campaign.status}</div>
                </div>
                <h3
                  className={styles.statusTitle}
                  style={{ fontSize: "1.1rem", marginTop: "25px" }}
                >
                  <i className="fas fa-calendar-day"></i>
                  Timeline
                </h3>
                <div className={styles.datesContainer}>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Start Date:</span>
                    <span className={styles.dateValue}>
                      {campaign.startDateFull}
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>
                      End Date:
                    </span>
                    <span className={styles.dateValue}>
                      {campaign.endDateFull}
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>
                      Days Elapsed:
                    </span>
                    <span className={styles.dateValue}>
                      {campaign.daysElapsed} days
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Days Remaining:</span>
                    <span className={styles.dateValue}>
                      {campaign.daysRemaining} days
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.actionsCard}>
                <h2 className={styles.actionTitle}>
                  <i className="fas fa-cog"></i>
                  Actions
                </h2>
                <div className={styles.actionButtons}>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-edit"></i>
                    Export Data
                  </button>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-chart-pie"></i>
                    Pause Campaign
                  </button>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-file-export"></i>
                    Delete Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        <button onClick={back}>
          Back to Campaigns
        </button>
        </div>

      </div>

  );
};

export default CampaignDetails;
