import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  PlayerScreen: undefined;
  PlayerList: undefined;
  PlayerForm: undefined;
  TeamList: undefined;
  TeamForm: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type PlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, "PlayerScreen">;
type PlayerFormNavigationProp = StackNavigationProp<RootStackParamList, "PlayerForm">;
type TeamListNavigationProp = StackNavigationProp<RootStackParamList, "TeamList">;
type TeamFormNavigationProp = StackNavigationProp<RootStackParamList, "TeamForm">;

export type HomeScreenProps = { navigation: HomeScreenNavigationProp };
export type PlayerScreenProps = { navigation: PlayerScreenNavigationProp };
export type PlayerFormProps = { navigation: PlayerFormNavigationProp };
export type TeamListProps = { navigation: TeamListNavigationProp };
export type TeamFormProps = { navigation: TeamFormNavigationProp };
