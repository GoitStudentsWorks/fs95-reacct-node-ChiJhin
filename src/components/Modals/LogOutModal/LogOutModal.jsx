import css from './LogOutModal.module.css'
const title = 'Log out'
export default function LogOutModal() {
    return (<>
    <div className={css.modalBox}>
        <h2 className={css.title}>{title}</h2>
    <p >Do you really want to leave?</p>
    <div className={css.btnBox}>
        <button className={css.btn}>Log out</button>
        <button className={css.btnCancel}>Cancel</button>
    </div></div>
    </>)
}
