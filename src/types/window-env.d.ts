/**
 * 读取文件api的结果
 */
interface FileOpt {
  kind?: String,
  name?: String,
  children?: FileOpt[],
  entries:  () => [Symbol.asyncIterator],
  next: () => void
}

interface Window {
  ZwLog: ZwLog,
  ZWJSBridge: ZWJSBridge,
  showDirectoryPicker: (file?:FileOpt) => Promise<FileOpt>,
  showOpenFilePicker: (file:FileOpt) => Promise<FileOpt>
  T: any,
  BMapGL: any,
  _AMapSecurityConfig: any,
  _chenUpdataData: number,
  CESIUM_BASE_URL: string
}

interface ZWJSBridge {
  setTitle: ({title: string}) => viod
}

/**
 * 埋点点击事件
 */
interface ZwLog{
  new(ZwLogKey: ZwLogKey):ZwLog
  record:(devCode:string,click:'CLK',option:{Name:string}) => void
  sendPV:(pvOption:pvOption) => void
}

interface ZwLogKey {
  _user_id: string | number,
  _user_nick: string
}

interface pvOption {
  /**
   * app Id
   */
  miniAppId: string,
  /**
   * app Name
   */
  miniAppName: string,
  /**
   * 登录状态
   */
  log_status: string,
  /**
   * 停留时长
   */
  Page_duration: string | number,
  /**
   * 页面加载时间
   */
  t2: string,
  /**
   * 页面响应时间
   */
  t0: string,
  /**
   * 页面Id
   */
  pageId: string | number | unknown,
  /**
   * 页面名称
   */
  pageName: string | unknown,
}

interface zwlogPv {
  Page_duration?: null | string | number,
  /**
   * 离开页面时间
   */
  t2?: null | number ,
  /**
   * 加载完的时间
   */
  t0?: null | number,
  /**
   * 页面Id
   */
  pId?: null | string | number | unknown,
  /**
   * 页面名称
   */
  pName?: null | string | number | unknown
}

/**
 * 坐标类型枚举
 */
declare enum mapType {
  /**
   * 天地图
   */
  TMap = 0,
  /**
   * 高德地图
   */
  AMap = 1,
  /**
   * 百度地图
   */
  BMap = 2
}

/**
 * 点聚合基础参数
 */
interface lnglatDataItem {
  /**
   * 地图所需点位
   */
  coordinate: Coordinate;
  /**
   * 主图形
   */
  path?: string;
  /**
   * 图形切换空间
   */
  pathS?: string;
  /**
    * 弹窗所需偏移量
    */
  mapH?: number;
}

interface mapSearch {
  poiList: {
    pois: searchList[]
  }
}

/**
 * 搜索方法结果
 */
interface searchList {
  address: string,
  location: {
    lng: number,
    lat: number,
  }
}
