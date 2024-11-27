import { NAvatar } from 'naive-ui'

export const jsonData = {
  type: 'n-avatar',
  props: {
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    round: false,
    bordered: false,
    color: undefined,
    'fallback-src': undefined,
    'img-props': undefined,
    lazy: false,
    'object-fit': 'fill',
    size: 'medium',
  },
  options: {
    'object-fit': ['fill', 'contain', 'cover', 'none', 'scale-down'],
    size: ['small', 'medium', 'large'],
  },
}

export const propsConfig = [
  {
    title: '常见属性',
    config: [{ label: '唯一id', path: '_id', type: 'n-input', props: { readonly: true } }],
  },
  {
    title: '基本属性',
    config: [
      { label: '头像地址', path: 'src', type: 'n-input' },
      { label: '头像是否圆形', path: 'round', type: 'n-switch' },
      { label: '头像是否带边框', path: 'bordered', type: 'n-switch' },
      {
        label: '头像的背景色',
        path: 'color',
        type: 'n-color-picker',
        props: { actions: ['clear'] },
      },
      { label: '头像的尺寸', path: 'size', type: 'n-radio-group' },
      { label: '头像加载失败时显示的图片的地址', path: 'fallback-src', type: 'n-input' },
      { label: '组件中 img 元素的属性', path: 'img-props', type: 'n-input' },
      { label: '是否让图片进入视口再加载', path: 'lazy', type: 'n-switch' },
      { label: '头像的图片在容器内的的适应类型', path: 'object-fit', type: 'n-radio-group' },
    ],
  },
  {
    title: '基本属性函数',
    config: [
      { label: '加载失败的渲染函数', path: 'render-fallback', type: 'code' },
      { label: '占位的渲染函数', path: 'render-placeholder', type: 'code' },
    ],
  },
  {
    title: '事件属性',
    config: [{ label: '头像的图片加载失败执行的回调', path: 'error', type: 'code' }],
  },
]

export function render(data) {
  return <NAvatar {...data.props} />
}
