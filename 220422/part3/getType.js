// default 는 한번만 사용 가능
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
