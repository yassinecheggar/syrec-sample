import { CutomAvatar } from "./style";
import { generateColorFromLetters } from "@/utils/helpers";
import { avatarprops } from "@/types/theme";

function Avatar(props: avatarprops) {
  const { children } = props;
  return (
    <CutomAvatar
      style={props.style}
      size={props.size ?? "large"}
      $color={generateColorFromLetters("A", "V")}
    >
      {children}
    </CutomAvatar>
  );
}

export default Avatar;
