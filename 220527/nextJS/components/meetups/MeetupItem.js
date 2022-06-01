import { useRouter } from 'next/router';

import Card from '../ui/Card';
// CSS 파일을 가져와서 필요한 CSS만 골라서 className 을 적용
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  // Hook
  const router = useRouter();

  const showDetailIsHandler = () => {
    // push : 새 페이지를 페이지 더미에 연결한다. 컴포넌트를 사용하는 것이나 마찬가지이다.
    router.push('/' + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailIsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
