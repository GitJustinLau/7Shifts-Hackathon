import "./OnBoardingHeader.scss";
import { IconChevronLeft, ProgressBar, te } from '@7shifts/sous-chef';

const OnBoardingHeader = ({ pagination, progress }) => {
    return (
        <>
            <header className="onboard-header">
                <IconChevronLeft />
                <h4 className="onboard-header__text">Onboarding</h4>
                <h4 className="onboard-header__pagination">{pagination}</h4>
            </header>
            <ProgressBar progress={progress} />
        </>

    )
}

export default OnBoardingHeader;