import styles from './Services.module.css'

const services = [
  {
    title: 'CRM & Sales',
    items: ['Lead management', 'Follow-ups', 'Notifications', 'Sales reporting'],
  },
  {
    title: 'Document Automation',
    items: ['Certificates', 'PDF generation', 'Approvals', 'E-signatures'],
  },
  {
    title: 'Business Operations',
    items: ['Repetitive tasks', 'Data processing', 'Internal workflows', 'Business processes'],
  },
  {
    title: 'Tool Integration',
    items: ['Airtable', 'Gmail', 'Telegram', 'Google Workspace'],
  },
]

function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.heading}>I automate the work that slows you down.</h2>
          <p className={styles.sub}>
            From lead management to document processing, I build workflows that connect
            your tools and remove repetitive manual work.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.block} key={service.title}>
              <h3 className={styles.blockTitle}>{service.title}</h3>
              <ul className={styles.list}>
                {service.items.map((item) => (
                  <li className={styles.item} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
