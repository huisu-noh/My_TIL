// our-domain.com/

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG',
    address: '서울특별시 종로구 청와대로 1 (세종로)',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Kwanghwamun.JPG',
    address: '서울특별시 종로구 청와대로 1 (세종로)',
    description: 'This is a Second meetup!',
  },
];

// props 로 받기 때문에 더이상 Hook이 필요 없다.
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/* 
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

// 비동기
// 여기 작성된 코드는 클라이언트 측에 들어가지 않기 때문에, 클라이언트 측에서 절대 실행되지 않는다.
// 이 코드는 빌드 프로세스 중에 실행되기 때문이다.
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // 페이지에서 요청이 들어오면 적어도 1초 마다 서버에서 페이지를 다시 생성!
    // 즉 페이지가 배열 다음에 규칙적으로 업데이트 되게 할 수 있다.
    revalidate: 1,
  };
}

export default HomePage;
