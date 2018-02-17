/**
 * Created by seal on 2/17/18.
 */

import React from 'react'
import RcPagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.min.css'

class Pagination extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props}
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        )
    }
}
export default Pagination