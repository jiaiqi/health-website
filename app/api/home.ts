import { useHttp } from './useHttp'

export interface selectReq {
  serviceName: string
  colNames: string[]
  page?: object
  use_type?: string
  query_source?: string
  condition?: any[]
  relation_condition?: object
  vpage_no?: string
  order?: any[]
}
export interface selectResp {
  data: any[]
  page: {
    total: number
  }
  state: 'SUCCESS' | 'FAIL'
}
export function getRequestUrl(service: string, type = 'select') {
  const config = useRuntimeConfig()
  const baseApp = config.public.baseApp
  const baseApi = config.public.baseApi
  return `${baseApi}/${baseApp}/${type}/${service}`
}

// 构建通用查询参数
export function buildCommonSelectBody(service = '', reqBody = {}): selectReq {
  const req = {
    serviceName: service,
    colNames: ['*'],
    page: { pageNo: 1, rownumber: 10 },
    use_type: 'list',
    query_source: 'list_page',
    ...reqBody,
  }
  return req
}
// 健康陕西列表
export function getHealthSX(reqBody = {}) {
  const service = 'srvjk_healthy_data_publish_jksx_v_select'
  const url = getRequestUrl(service)
  const req = buildCommonSelectBody(service, reqBody)
  return useHttp.post(url, req) as Promise<selectResp>
}
