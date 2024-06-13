import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import LogoSubtitle from '../../../assets/images/logo_sub.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={LogoS} alt="solid-logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logo-sub" />
        </div>
    )
}

export default Logo
