/*A
 * @description: 整合组件初始化数据
 *
 *
 *
 *
 */
import titleBar from './preview/title-bar/title-bar';
import search from './preview/search/search';
import blankPaceholder from './preview/blankPaceholder/blankPaceholder';
import separator from './preview/separator/separator';
const defaultData = {
  titleBar,
  search,
  blankPaceholder,
  separator,
};
const defaultDataArr = Object.values(defaultData);
type FormDataType = (typeof defaultDataArr)[number];

export interface ComponentItem {
  icon?: string;
  id?: string;
  label: string;
  value: string;
  formData?: FormDataType;
  showType?: boolean;
  type?: number;
}
export default defaultData;
