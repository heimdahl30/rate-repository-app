import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    backgroundColor: "#D3D3D3",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  imgSize: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 7,
  },
  container: {
    display: "flex",
    paddingRight: 100,
    backgroundColor: "white",
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexCol: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  box: {
    backgroundColor: "#3498db",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: "white",
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  ratingsBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 180,
  },
};

export default theme;
