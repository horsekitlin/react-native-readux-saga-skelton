import React from "react";
import Carousel from "react-native-banner-carousel";
import LinkColumn from "./LinkColumn";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { Text, Divider } from "react-native-elements";
import { getCN } from "../../utils/LanguageManager";
import colors from "../../constants/colors";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = Dimensions.get("window").height;

const images = [
  "http://5b0988e595225.cdn.sohucs.com/images/20170919/397817fa369d4d9e8be5507aed9ccb05.jpeg",
  "http://5b0988e595225.cdn.sohucs.com/images/20170919/495a167466f14850a75ba56588c25525.jpeg",
  "https://www.pkstep.com/wp-content/uploads/2017/05/waifu2x.png"
];

const LinkIconsRows = {
  row1: [
    {
      image: require("../../assets/images/ic-home1.png"),
      label: getCN("賬戶管理"),
      key: "accounts"
    },
    {
      image: require("../../assets/images/ic-home2.png"),
      label: getCN("工具包下載"),
      key: "download"
    },
    {
      image: require("../../assets/images/ic-home3.png"),
      label: getCN("額度管理"),
      key: "amountManager"
    }
  ],
  row2: [
    {
      image: require("../../assets/images/ic-home4.png"),
      label: getCN("返利提現"),
      key: "cashback"
    },
    {
      image: require("../../assets/images/ic-home5.png"),
      label: getCN("使用說明"),
      key: "qanda"
    },
    {
      image: require("../../assets/images/ic-home6.png"),
      label: getCN("客服中心"),
      key: "feedback"
    }
  ]
};

const renderPage = (image, index) => {
  return (
    <View key={index}>
      <Image
        style={{ width: BannerWidth, height: BannerHeight / 3 }}
        source={{ uri: image }}
      />
    </View>
  );
};

const MainScene = props => (
  <Grid>
    <Row size={1}>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {images.map((image, index) => renderPage(image, index))}
      </Carousel>
    </Row>
    <Row size={2}>
      <Grid>
        <Row size={1}>
          <Col style={styles.amountContainer}>
            <Text h6 style={styles.amountTitle}>
              {getCN("今日交易額度")}
            </Text>
            <Text h6 style={styles.amountContent}>
              0.00
            </Text>
          </Col>
          <Col style={styles.amountContainer}>
            <Text h6 style={styles.amountTitle}>
              {getCN("可提現金額")}
            </Text>
            <Text h6 style={styles.amountContent}>
              0.00
            </Text>
          </Col>
          <Col style={styles.amountContainer}>
            <Text h6 style={styles.amountTitle}>
              {getCN("信用額度")}
            </Text>
            <Text h6 style={styles.amountContent}>
              0.00
            </Text>
          </Col>
        </Row>
        <Divider style={{ backgroundColor: colors.grey["400"] }} />
        <Row size={2}>
          <Grid>
            <Row>
              {LinkIconsRows.row1.map(column => (
                <LinkColumn {...column} />
              ))}
            </Row>
            <Row>
              {LinkIconsRows.row2.map(column => (
                <LinkColumn {...column} />
              ))}
            </Row>
          </Grid>
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export default MainScene;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    marginTop: 20,
    fontWeight: "700"
  },
  amountContainer: {
    borderRightWidth: 1,
    borderColor: colors.grey["400"],
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30
  },
  amountTitle: { fontWeight: "700", color: colors.orange["700"] },
  amountContent: { fontWeight: "700", marginTop: 20 },
});
