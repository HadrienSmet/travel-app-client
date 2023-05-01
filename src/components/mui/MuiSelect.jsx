import {
    Button,
    Item,
    Label,
    ListBox,
    Popover,
    Select,
    SelectValue,
} from "react-aria-components";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useMuiSelect = ({ changeChoice }) => {
    const [choice, setChoice] = useState("");
    const labelRef = useRef(null);
    const valueRef = useRef(null);

    //This function change the state of this component and the state of his parent
    //@Params { Type: Object } --> The param of the onChange event
    const handleChange = (selected) => {
        setChoice(selected);
        changeChoice(selected);
    };

    useEffect(() => {
        console.log(choice);
        if (choice !== "") {
            labelRef.current.classList.add("filled");
            valueRef.current.classList.add("visible");
        } else {
            valueRef.current.classList.remove("visible");
            labelRef.current.classList.remove("filled");
        }
    }, [choice]);

    return {
        labelRef,
        valueRef,
        handleChange,
    };
};

const MuiSelect = ({
    dynamicClass,
    dynamicPlaceholder,
    choices,
    changeChoice,
    maxHeight,
}) => {
    const { labelRef, valueRef, handleChange } = useMuiSelect({ changeChoice });
    return (
        <div className={dynamicClass}>
            <Select onSelectionChange={handleChange}>
                <Label ref={labelRef}>{dynamicPlaceholder}</Label>
                <Button>
                    <SelectValue
                        ref={valueRef}
                        placeholder={dynamicPlaceholder}
                    />
                    <span aria-hidden="true">▼</span>
                </Button>
                <Popover maxHeight={maxHeight}>
                    <ListBox>
                        {choices.map((choice) => (
                            <Item
                                id={choice}
                                onClick={handleChange}
                                key={choice}
                                textValue={choice}
                                className={({ isFocused, isSelected }) =>
                                    `my-item ${isFocused ? "focused" : ""} ${
                                        isSelected ? "selected" : ""
                                    }`
                                }
                            >
                                {choice}
                            </Item>
                        ))}
                    </ListBox>
                </Popover>
            </Select>
        </div>
    );
};

export default MuiSelect;
