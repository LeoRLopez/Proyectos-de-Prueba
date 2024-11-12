import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  PlayerScreen: undefined;
  PlayerList: undefined;
  PlayerForm: undefined;
  TeamScreen: undefined;
  TeamList: undefined;
  TeamForm: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
export type PlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, "PlayerScreen">;
export type PlayerFormNavigationProp = StackNavigationProp<RootStackParamList, "PlayerForm">;
export type PlayerListNavigationProp = StackNavigationProp<RootStackParamList, "PlayerList">;
export type TeamScreenNavigationProp = StackNavigationProp<RootStackParamList, "TeamScreen">;
export type TeamListNavigationProp = StackNavigationProp<RootStackParamList, "TeamList">;
export type TeamFormNavigationProp = StackNavigationProp<RootStackParamList, "TeamForm">;
