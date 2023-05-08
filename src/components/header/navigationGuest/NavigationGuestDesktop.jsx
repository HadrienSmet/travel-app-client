import { useDispatch } from "react-redux";
import { setWelcomeState } from "../../../features/welcomeState.slice";
import ButtonUI from "../../ui/ButtonUI";

const NavigationGuestDesktop = () => {
    const dispatch = useDispatch();
    const dispatchState = (state) => dispatch(setWelcomeState(state));
    return (
        // <ButtonGroup variant="text" aria-label="text button group">
        //     <Button onClick={() => dispatch(setWelcomeState("signup"))}>
        //         Inscription
        //     </Button>
        //     <Button onClick={() => dispatch(setWelcomeState("signin"))}>
        //         Connexion
        //     </Button>
        // </ButtonGroup>
        <div className="guest-navigation__buttons-container">
            <ButtonUI
                buttonContent="Inscription"
                buttonHandler={() => dispatchState("signup")}
                dynamicClass={"nav"}
            />
            <ButtonUI
                buttonContent="Connexion"
                buttonHandler={() => dispatchState("signin")}
                dynamicClass={"nav"}
            />
        </div>
    );
};

export default NavigationGuestDesktop;
