import { NButton, NIcon } from 'naive-ui'
import { h, resolveComponent } from 'vue'
import IconList from '@/components/iconList.vue'

export const jsonData = {
  type: 'n-button',
  props: {
    'attr-type': 'button',
    block: false,
    bordered: true,
    circle: false,
    color: undefined,
    'text-color': undefined,
    dashed: false,
    disabled: false,
    focusable: true,
    ghost: false,
    'icon-placement': 'left',
    keyboard: true,
    loading: false,
    quaternary: false,
    round: false,
    size: 'medium',
    secondary: false,
    strong: false,
    tertiary: false,
    text: false,
    type: 'default',
    tag: 'button',
    _id: 0,
    _text: '按钮',
    _iconName: '',
    _iconRenderType: 'icon 插槽',
    // 'render-icon': () => undefined,
  },
  options: {
    'attr-type': ['button', 'submit', 'reset'],
    'icon-placement': ['left', 'right'],
    size: ['tiny', 'small', 'medium', 'large'],
    type: ['default', 'tertiary', 'primary', 'success', 'info', 'warning', 'error'],
    _iconRenderType: ['icon 插槽', 'render-icon 属性'],
  },
}

export const propsConfig = [
  {
    title: '常见属性',
    config: [
      { label: '唯一id', path: '_id', type: 'n-input', props: { readonly: true } },
      { label: '按钮内容', path: '_text', type: 'n-input' },
    ],
  },
  {
    title: '按钮属性设置',
    config: [
      { label: '按钮的类型', path: 'type', type: 'n-radio-group', props: { vertical: true } },
      { label: '是否是次要按钮', path: 'secondary', type: 'n-switch' },
      { label: '是否是三级按钮', path: 'tertiary', type: 'n-switch' },
      { label: '是否是四级按钮', path: 'quaternary', type: 'n-switch' },
      { label: '是否显示为文本按钮', path: 'text', type: 'n-switch' },
      { label: '是否透明', path: 'ghost', type: 'n-switch' },
      { label: '是否显示圆角', path: 'round', type: 'n-switch' },
      { label: '是否为圆形', path: 'circle', type: 'n-switch' },
      { label: '文字是否加粗', path: 'strong', type: 'n-switch' },
      { label: '是否显示 border', path: 'bordered', type: 'n-switch' },
      { label: '边框是否为虚线', path: 'dashed', type: 'n-switch' },
      { label: '尺寸', path: 'size', type: 'n-radio-group' },
      { label: '按钮颜色', path: 'color', type: 'n-color-picker', props: { actions: ['clear'] } },
      {
        label: '按钮文字颜色',
        path: 'text-color',
        type: 'n-color-picker',
        props: { actions: ['clear'] },
      },
      { label: '是否显示为块级', path: 'block', type: 'n-switch' },
      { label: '是否禁用', path: 'disabled', type: 'n-switch' },
      { label: '是否显示加载状态', path: 'loading', type: 'n-switch' },
      { label: '是否可以被聚焦', path: 'focusable', type: 'n-switch' },
      { label: '是否支持键盘操作', path: 'keyboard', type: 'n-switch' },
      { label: '按钮需要被渲染为什么标签', path: 'tag', type: 'n-input' },
      { label: 'DOM 的 type 属性', path: 'attr-type', type: 'n-radio-group' },
    ],
  },
  {
    title: '图标设置',
    config: [
      {
        label: '图标选择',
        path: '_iconName',
        type: 'slot',
        render(data) {
          return (
            <IconList
              value={data.props._iconName}
              onUpdate:value={(val) => (data.props._iconName = val)}
            />
          )
        },
      },
      { label: '图标的位置', path: 'icon-placement', type: 'n-radio-group' },
      { label: '图标渲染方式', path: '_iconRenderType', type: 'n-radio-group' },
    ],
  },
  {
    title: '常用事件',
    config: [{ label: '点击事件', path: '_onClick', type: 'code' }],
  },
]
export function render(data) {
  let renderIcon = undefined
  if (data.props._iconName) {
    renderIcon = function renderIcon() {
      return h(NIcon, null, {
        default: () => h(resolveComponent(data.props._iconName)),
      })
    }
  }

  return (
    <NButton {...data.props} render-icon={renderIcon}>
      {data.props._text ? data.props._text : false}
    </NButton>
  )
}
