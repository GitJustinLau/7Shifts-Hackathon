import "./OnBoardingHeader.scss";
import { IconChevronLeft, ProgressBar } from '@7shifts/sous-chef';

const OnBoardingHeader = ({ pagination, progress }) => {
    return (
        <>
            <header className="onboard-header">
                <IconChevronLeft />
                <h3 className="onboard-header__text">Onboarding</h3>
                <h3 className="onboard-header__pagination">{pagination}</h3>
            </header>
            <ProgressBar progress={progress} />
        </>
    )
}

export default OnBoardingHeader;