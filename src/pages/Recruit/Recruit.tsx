import { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import {
  banner,
  process,
  passion,
  cooperation,
  responsibility,
  passionblue,
  cooperationblue,
  responsibilityblue,
  roadmap0,
  roadmap1,
} from "../../assets/Recruit/index";
import {
  title,
  content,
  finishment,
  linksubtitle,
} from "../../constants/Recruit/TypoData";
import logo from "../../assets/logo.png";
import AboutUs from "../../components/AboutUs";

export const Recruit = () => {
  const [selectedTalent, setSelectedTalent] = useState<string | null>(null);

  const handleTalentClick = (talent: string) => {
    setSelectedTalent(talent);
  };

  const onClickApplyBtn = () => {
    window.open("https://forms.gle/865t3KhNBq58zz4Y7");
  };

  return (
    <StRecruitContainer>
      <StNavBar>
        <NavBar />
      </StNavBar>
      <img src={banner} alt="Banner" />
      <StRecruitTypoWrapper>
        <StRecruitTitle>{title}</StRecruitTitle>
        <StRecruitContent>{content}</StRecruitContent>
        <StRecruitFinishMent>{finishment}</StRecruitFinishMent>
        <StSectionTitle>TIMELINE</StSectionTitle>
        <StTimelineBox>
          <StTimelineImg src={roadmap0} alt="RoadMap" />
          <StTimelineImg src={roadmap1} alt="RoadMap" />
        </StTimelineBox>
        <StSectionTitle>Recruiting Process</StSectionTitle>
        <img src={process} />
      </StRecruitTypoWrapper>
      <StRecruitInfoWrapper>
        <StInfoTitle>ABOUT US</StInfoTitle>
        <StInfoSubtitle>
          숭실대 멋쟁이사자처럼은 이런 사람들이에요
        </StInfoSubtitle>
        <StAboutUs>
          <AboutUs />
        </StAboutUs>
        <StInfoTitle>We are looking for</StInfoTitle>
        <StInfoSubtitle>
          숭실대 멋쟁이사자처럼은 이런 사람을 원해요
        </StInfoSubtitle>
        <StInfoSubtitleDetail>Click Below!</StInfoSubtitleDetail>

        <StTalentedWrapper>
          <StTalentedBtn
            onClick={() => handleTalentClick("passion")}
            $isSelected={selectedTalent === "passion"}
            whileTap={{ scale: 0.9, y: -5 }}
          >
            <motion.img
              src={selectedTalent === "passion" ? passionblue : passion}
              alt="passion"
            />
          </StTalentedBtn>
          <StTalentedBtn
            onClick={() => handleTalentClick("cooperation")}
            $isSelected={selectedTalent === "cooperation"}
            whileTap={{ scale: 1.1, y: 5 }}
          >
            <img
              src={
                selectedTalent === "cooperation" ? cooperationblue : cooperation
              }
              alt="cooperation"
            />
          </StTalentedBtn>
          <StTalentedBtn
            onClick={() => handleTalentClick("responsibility")}
            $isSelected={selectedTalent === "responsibility"}
            whileTap={{ scale: 0.9, y: -5 }}
          >
            <img
              src={
                selectedTalent === "responsibility"
                  ? responsibilityblue
                  : responsibility
              }
              alt="responsibility"
            />
          </StTalentedBtn>
        </StTalentedWrapper>
      </StRecruitInfoWrapper>
      <StRecruitLinkWrapper>
        <StLinkTitle>
          지금 바로 <StHighlightText>지원</StHighlightText>
          하세요
        </StLinkTitle>
        <StLinkSubtitle>{linksubtitle}</StLinkSubtitle>
        <StLinkBtn onClick={onClickApplyBtn}>
          멋쟁이사자처럼 12기 지원 ▶
        </StLinkBtn>
      </StRecruitLinkWrapper>
      <StLogo src={logo} alt="Logo" />
    </StRecruitContainer>
  );
};

const StRecruitContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 7%;
  padding-bottom: 30%;
  background-color: #f4f8ff;
`;

const StNavBar = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const StRecruitTypoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 12% 10%;
`;

const StRecruitTitle = styled.span`
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 5vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StRecruitContent = styled.span`
  padding: 4% 15% 0% 0%;
  color: #1c1c1c;
  font-size: 2vw;
  font-weight: 500;
  line-height: 4vw;
`;

const StRecruitFinishMent = styled.span`
  padding: 10% 15% 0% 0%;
  color: #1c1c1c;
  font-size: 2vw;
  font-weight: 500;
  line-height: 4vw;
`;

const StSectionTitle = styled.span`
  padding: 30% 15% 5% 0%;
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 4vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StTimelineBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StTimelineImg = styled.img`
  width: 50%;
`;

const StRecruitInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StInfoTitle = styled.span`
  padding: 20% 0% 0% 0%;
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 4vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StInfoSubtitle = styled.span`
  padding: 2% 0% 1.5% 0%;
  color: #3274d9;
  font-size: 3vw;
  font-weight: 500;
  line-height: 5vw;
`;

const StInfoSubtitleDetail = styled.span`
  padding: 0% 0% 0.5% 0%;
  color: #90b2e6;
  font-size: 2.5vw;
  font-weight: 500;
`;

const StAboutUs = styled.div`
  margin-top: 5%;
`;

const StTalentedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  gap: 8vw;
`;

const StTalentedBtn = styled(motion.button)<{ $isSelected: boolean }>`
  width: 22vw;
  height: 22vw;
`;

const StRecruitLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30%;
`;

const StLinkTitle = styled.span`
  color: #1c1c1c;
  text-align: center;
  font-size: 4vw;
  font-weight: 900;
`;

const StHighlightText = styled.span`
  background-color: #e4efff;
  color: #3383fe;
  font-size: 5vw;
  font-weight: 900;
`;

const StLinkSubtitle = styled.span`
  padding-top: 3%;
  color: #1c1c1c;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 400;
  line-height: 4vw;
`;

const StLinkBtn = styled.button`
  width: 60vw;
  margin-top: 5%;
  padding: 3% 0%;
  background-color: #3383fe;
  color: #ffffff;
  font-size: 2vw;
  font-weight: 700;
  border-radius: 2vw;
`;

const StLogo = styled.img`
  width: 3vw;
  margin: 30% 0% 0% 49%;
`;
