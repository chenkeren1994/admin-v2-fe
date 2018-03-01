/**
 * Created by seal on 2/23/18.
 */

import React from 'react'
import Simditor from 'simditor'
import 'simditor/styles/simditor.scss'
import './index.scss'

export default class RichEditor extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.loadEditor()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.defaultDetail !== nextProps.defaultDetail) {
            this.simditor.setValue(nextProps.defaultDetail)
        }
    }
    loadEditor() {
        let element = this.refs['textarea']
        this.simditor = new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || '请输入内容',
            upload: {
                url: '/manage/product/richtext_img_upload.do',
                defaultImage: '',
                fileKey: 'upload_file'
            }
        })
        this.bindEditorEvent()
    }
    //初始化富文本编辑器的事件
    bindEditorEvent() {
        this.simditor.on('valuechanged', e => {
            this.props.onValueChange(this.simditor.getValue())
        })
    }
    render() {
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}