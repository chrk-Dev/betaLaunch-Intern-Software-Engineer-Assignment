import NotificationsLogo from '../assets/Notifications.svg'
import ProfileIcon from '../assets/Profile.svg'
import ChevrondownIcon from '../assets/Chevron-down.svg'




export default function NavBar() {
    return (

        <div className="flex gap-5 justify-between">
        <img
          loading="lazy"
          src={NotificationsLogo.src}
          className="shrink-0 my-auto w-6 aspect-square"
        />
        <div className="flex gap-2">
          <img
            loading="lazy"
            src={ProfileIcon.src}
            className="shrink-0 w-10 rounded-full aspect-square"
          />
          <img
            loading="lazy"
            src={ChevrondownIcon.src}
            className="shrink-0 my-auto w-6 aspect-square"
          />
        </div>
      </div>
    )
}