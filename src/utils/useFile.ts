/**
 * 获取文件列表
 * @returns 
 */
export async function useDirecotryPicker(): Promise<FileOpt | null>  {
  let fileList = null
  if(!window.showDirectoryPicker) {
    return fileList
  }
  fileList = await window.showDirectoryPicker()
  return getFile(fileList)
}
/**
 * 递归获取文件
 * @param opt 
 * @returns 
 */
async function getFile(opt:FileOpt):Promise<FileOpt>{
  if(opt.kind === 'directory') {
    opt.children = []
    for await (let [key, value] of opt.entries()) {
      opt.children.push(await getFile(value))
    }
  }
  return opt
}
