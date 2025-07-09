import React, { useState, useEffect, FC } from 'react';
import styles from './LoadingScreen.module.css';

interface FloatingElement {
  id: number;
  style: React.CSSProperties;
}

const statusMessages = [
    ["Cargando datos", "Verificando seguridad", "Validando información"],
    ["Procesando información", "Encriptando datos", "Generando reportes"],
    ["Optimizando recursos", "Preparando resultados", "Finalizando operación"]
];

const LoadingScreen: FC = () => {
    const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
    const [currentStatus, setCurrentStatus] = useState(0);

    useEffect(() => {
        // Crear elementos decorativos sutiles
        const elements: FloatingElement[] = [];
        for (let i = 0; i < 15; i++) {
            const size = Math.random() * 120 + 30;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.1 + 0.03;

            elements.push({
                id: i,
                style: {
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${posX}%`,
                    top: `${posY}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    opacity: opacity,
                }
            });
        }
        setFloatingElements(elements);

        // Cambiar texto de estado periódicamente
        const interval = setInterval(() => {
            setCurrentStatus(prevStatus => (prevStatus + 1) % statusMessages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.body}>
                {/* Elementos decorativos sutiles */}
                <div id="floatingElements">
                    {floatingElements.map(el => (
                        <div key={el.id} className={styles.floatingElement} style={el.style}></div>
                    ))}
                </div>

                <div className={styles.loadingContainer}>
                    <div className={styles.loadingCard}>
                        <div className={styles.loadingHeader}>
                            <h1 className={styles.loadingTitle}>Procesando su solicitud</h1>
                            <p className={styles.loadingSubtitle}>Estamos preparando su experiencia. Este proceso tomará solo unos momentos.</p>
                        </div>

                        <div className={styles.loadingContent}>
                            <div className={styles.spinnerContainer}>
                                <div className={styles.spinner}></div>
                                <div className={styles.spinnerInner}>
                                    <i className={`fas fa-cog ${styles.spinnerIcon}`}></i>
                                </div>
                            </div>

                            <div className={styles.progressContainer}>
                                <div className={styles.progressBar}></div>
                            </div>

                            <p className={styles.loadingText}>Por favor, espere mientras completamos la operación</p>

                            <div className={styles.statusContainer}>
                                <div className={styles.statusItem}>
                                    <div className={styles.statusIcon} style={{ '--delay': 1 } as React.CSSProperties}>
                                        <i className="fas fa-database"></i>
                                    </div>
                                    <span className={styles.statusLabel}>{statusMessages[currentStatus][0]}</span>
                                </div>
                                <div className={styles.statusItem}>
                                    <div className={styles.statusIcon} style={{ '--delay': 2 } as React.CSSProperties}>
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <span className={styles.statusLabel}>{statusMessages[currentStatus][1]}</span>
                                </div>
                                <div className={styles.statusItem}>
                                    <div className={styles.statusIcon} style={{ '--delay': 3 } as React.CSSProperties}>
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <span className={styles.statusLabel}>{statusMessages[currentStatus][2]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingScreen;
