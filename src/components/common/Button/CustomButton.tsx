import {Button as ChakraButton, ButtonProps as ChakraButtonProps} from "@chakra-ui/react";

const MAIN_BUTTON_COLOR = "teal";
const MAIN_BUTTON_SIZE = "lg";

interface CustomButtonProps extends ChakraButtonProps {
    type?: "button" | "submit" | "reset";
}

function CustomButton({
                          children,
                          colorScheme = MAIN_BUTTON_COLOR,
                          size = MAIN_BUTTON_SIZE,
                          variant = "solid",
                          type = "button",
                          onClick,
                          ...props
                      }: CustomButtonProps) {
    return (
        <ChakraButton
            colorScheme={colorScheme}
            size={size}
            variant={variant}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </ChakraButton>
    );
}

export default CustomButton;