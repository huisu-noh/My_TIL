import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  useRouter();

  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG'
      title='First Meetup'
      address='서울특별시 종로구 청와대로 1 (세종로)'
      description='This is a first meetup'
    />
  );
}

// 객체를 리턴하는 일을 한다
export async function getStaticPaths() {
  return {
    // nextJS에게 paths 배열이 모든 지원되는 매개변수를 저장할지 아니면 일부만 저장할지 알려줌
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

// nextJS가 동적 페이지의 모든 버전의 프리제너레이트?가 필요하다
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetups: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG',
        id: meetupId,
        title: 'First Meetup',
        address: '서울특별시 종로구 청와대로 1 (세종로)',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
