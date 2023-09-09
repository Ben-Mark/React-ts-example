import Link from "next/link";
import { palette } from "@/themes/theme";
import { Button } from "@chakra-ui/react";

export type ButtonType = {
  link: string
  text: string,
  size?: Size
  variant?: string
  fontSize?: Size
  fontWeight?: ButtonFontWeight
  backgroundColor?: string
  fontColor?: string
  hoverColor?: string
}

export enum Size {
  xs="xs", // Extra Small size.
  sm="sm", //Small size.
  md="md", // Medium size (default).
  lg="lg" // Large size.
}

export enum ButtonVariant {
  solid="solid", //(default variant): The button will have a solid background color.
  outline="outline", //The button will have a transparent background and a thin border.
  ghost="ghost", // The button will have a transparent background and no border.
  link="link", // The button will look like a typical text hyperlink.
  unstyled="unstyled" // The button will have no styling applied.
}


export enum ButtonFontWeight {
  medium="medium",

}

export default function button(buttonType: ButtonType) {
  return (
    <Button
      as={Link}
      href={buttonType.link}
      bg={buttonType.backgroundColor ?? palette.button}
      _hover={{ bg: buttonType.hoverColor ?? palette.buttonHoverBlue }}
      color={buttonType.fontColor ?? "white"}
      size={buttonType.size ?? Size.md}
      fontWeight={buttonType.fontWeight ?? ButtonFontWeight.medium}
      fontSize={buttonType.fontSize ?? Size.md}
      variant={buttonType.variant ?? ButtonVariant.solid}
    >
      {buttonType.text}
    </Button>
  );
}
