import { use } from '../utils';
import Info from '../info';
import isSrc from '../utils/validate/src';

const [sfc] = use('icon');

function Icon(h, props, slots, ctx) {
  const urlIcon = isSrc(props.name);

  return (
    <i
      class={[
        props.classPrefix,
        urlIcon ? 'van-icon--image' : `${props.classPrefix}-${props.name}`
      ]}
      style={{
        color: props.color,
        fontSize: props.size
      }}
      {...ctx.data}
    >
      {ctx.default && ctx.default()}
      {urlIcon && <img src={props.name} />}
      <Info info={props.info} />
    </i>
  );
}

Icon.props = {
  name: String,
  size: String,
  color: String,
  info: [String, Number],
  classPrefix: {
    type: String,
    default: 'van-icon'
  }
};

export default sfc(Icon);
