/**
 * Created by seal on 2/16/18.
 */

import MUtil from 'util/mm.jsx'
const _mm = new MUtil()

class Statistic {
    //首页数据统计
    getHomeCount() {
        return _mm.request({
            url : '/manage/statistic/base_count.do'
        })
    }
}
export default Statistic