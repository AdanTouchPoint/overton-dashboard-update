import React from "react";
import styles from "./Details.module.css";
import { DefaultTemplate } from "payload/components/templates";

const CampaignDetails: React.FC = () => {
  const campaign = {
    id: "12345",
    title: "Campaña de Concientización Ambiental",
    subtitle: "Un esfuerzo para promover la sostenibilidad",
    leads: 1500,
    conversionRate: "12%",
    revenue: "$5000",
    costPerLead: "$3.33",
    url: "https://example.com/campaign",
    type: "Digital",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    objective: "Aumentar la conciencia sobre el reciclaje",
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
  return (
    <DefaultTemplate>
      <div className={styles.contentAll}>
        <div className={styles.campaignContainer}>
          <div className={styles.campaignHeader}>
            <div className={styles.campaignTitleContainer}>
              <div className={styles.campaignId}>ID: {campaign.id}</div>
              <h1 className={styles.campaignTitle}>{campaign.title}</h1>
              <p className={styles.campaignSubtitle}>{campaign.subtitle}</p>
              <div className={styles.headerStats}>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>{campaign.leads}</span>
                  <span className={styles.statLabel}>Leads Generados</span>
                </div>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>
                    {campaign.conversionRate}
                  </span>
                  <span className={styles.statLabel}>Tasa de Conversión</span>
                </div>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>{campaign.revenue}</span>
                  <span className={styles.statLabel}>Ingresos Generados</span>
                </div>
                <div className={styles.headerStat}>
                  <span className={styles.statValue}>
                    {campaign.costPerLead}
                  </span>
                  <span className={styles.statLabel}>Costo por Lead</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.campaignBody}>
            <div className={styles.mainContent}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <i className="fas fa-info-circle"></i>
                  Información General
                </h2>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-link"></i>
                      URL de la Campaña
                    </span>
                    <a
                      href={campaign.url}
                      className={`${styles.infoValue} ${styles.urlValue}`}
                    >
                      {campaign.url}
                    </a>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-tags"></i>
                      Tipo de Campaña
                    </span>
                    <span className={styles.infoValue}>{campaign.type}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-calendar-alt"></i>
                      Fecha de Inicio
                    </span>
                    <span className={styles.infoValue}>
                      {campaign.startDate}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-calendar-check"></i>
                      Fecha de Finalización
                    </span>
                    <span className={styles.infoValue}>{campaign.endDate}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-bullseye"></i>
                      Objetivo Principal
                    </span>
                    <span className={styles.infoValue}>
                      {campaign.objective}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>
                      <i className="fas fa-user-tie"></i>
                      Responsable
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
                  Estado Actual
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
                  Cronología
                </h3>
                <div className={styles.datesContainer}>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Fecha de inicio:</span>
                    <span className={styles.dateValue}>
                      {campaign.startDateFull}
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>
                      Fecha de finalización:
                    </span>
                    <span className={styles.dateValue}>
                      {campaign.endDateFull}
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>
                      Días transcurridos:
                    </span>
                    <span className={styles.dateValue}>
                      {campaign.daysElapsed} días
                    </span>
                  </div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Días restantes:</span>
                    <span className={styles.dateValue}>
                      {campaign.daysRemaining} días
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.actionsCard}>
                <h2 className={styles.actionTitle}>
                  <i className="fas fa-cog"></i>
                  Acciones
                </h2>
                <div className={styles.actionButtons}>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-edit"></i>
                    Editar Campaña
                  </button>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-chart-pie"></i>
                    Ver Reporte Completo
                  </button>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-file-export"></i>
                    Exportar Datos
                  </button>
                  <button className={styles.actionBtn}>
                    <i className="fas fa-pause"></i>
                    Pausar Campaña
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default CampaignDetails;
