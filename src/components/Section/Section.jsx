import css from './section.module.css'
const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h2 className={css.sectionTitle}>{title}</h2>
            {children}
        </section>
    );
    
};
export default Section;