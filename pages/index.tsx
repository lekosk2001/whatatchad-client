import { PageContentsBox, PageDesc } from "@/components/common/Page/Page";
import PageTitle from "@/components/common/Page/PageTitle";
import Head from "next/head";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>What a Chad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/trident.png" />
      </Head>
      <MainContainer>
        <PageTitle title="CHAD님 반갑습니다." location="청주시 OO구 OO동" />
        <MainSection>
          <Link href={`/workout/map`}>
            <SectionHeader>
              <PageDesc>내 주변 운동시설</PageDesc><BiRightArrowAlt />
            </SectionHeader>
          </Link>
          <PageContentsBox style={{ "height": "300px" }}>운동시설 내용 (임시)</PageContentsBox>
        </MainSection>
        <SectionBox>
          <MainSection>
            <Link href={`/manage/calendar`}>
              <SectionHeader>
                <PageDesc>캘린더</PageDesc><BiRightArrowAlt />
              </SectionHeader>
            </Link>
            <PageContentsBox style={{ "height": "580px" }}>캘린더 내용 (임시)</PageContentsBox>
          </MainSection>
          <MainSection>
            <Link href={`/manage/list`}>
              <SectionHeader>
                <PageDesc>월별 내역</PageDesc><BiRightArrowAlt />
              </SectionHeader>
            </Link>
            <PageContentsBox style={{ "height": "580px" }}>월별내역 내용 (임시)</PageContentsBox>
          </MainSection>
        </SectionBox>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
`;

const MainSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const SectionBox = styled.div`
  display: flex;
  gap: 20px;
`;

const SectionHeader = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;  
  transition: 0.2s all ease;
  svg{
    height: 30px;
    width: 30px;    
    color: #666666;
  }
  &:hover{
    color: #666666;
  }
`;

