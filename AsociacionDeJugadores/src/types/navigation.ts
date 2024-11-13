import { StackNavigationProp } from "@react-navigation/stack";
import { Player } from "../models/Player";


export type RootStackParamList = {
  Home: undefined;
  PlayerScreen: undefined;
  PlayerList: undefined;
  PlayerForm: undefined;
  TeamScreen: undefined;
  TeamList: undefined;
  TeamForm: undefined;
  PlayerDetails: {
    player: Player;
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
export type PlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, "PlayerScreen">;
export type PlayerFormNavigationProp = StackNavigationProp<RootStackParamList, "PlayerForm">;
export type PlayerListNavigationProp = StackNavigationProp<RootStackParamList, "PlayerList">;
export type TeamScreenNavigationProp = StackNavigationProp<RootStackParamList, "TeamScreen">;
export type TeamListNavigationProp = StackNavigationProp<RootStackParamList, "TeamList">;
export type TeamFormNavigationProp = StackNavigationProp<RootStackParamList, "TeamForm">;
export type PlayerDetailsNavigationProp = StackNavigationProp<RootStackParamList, "PlayerDetails">;