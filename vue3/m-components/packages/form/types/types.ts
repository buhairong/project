import { CSSProperties } from 'vue'
import { RuleItem } from "./rule"
import { ValidateFieldsError } from 'async-validator'

interface Callback {
  (isValid?: boolean, invalidFields?: ValidateFieldsError): void,
}

export interface FormOptions {
    // 表单项的类型
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 
          'checkbox-button' | 'color-picker' | 'date-picker' | 
          'input' | 'input-number' | 'radio' | 'radio-group' | 
          'radio-button' | 'rate' | 'select' | 'select-v2' | 
          'option' | 'slider' | 'switch' | 'time-picker' | 
          'time-select' | 'transfer' | 'upload' | 'editor',
    value?: any, // 表单项的值
    label?: string,
    prop?: string,
    rules?: RuleItem[],
    placeholder?: string,
    attrs?: {
        clearable?: boolean,
        showPassword?: boolean,
        disabled?: boolean,
        style?: CSSProperties
    },
    children?: FormOptions[],
    uploadAttrs?: {
        action: string,
        headers?: object,
        method?: 'post' | 'put' | 'patch',
        multiple?: boolean,
        data?: any,
        name?: string,
        withCredentials?: boolean,
        showFileList?: boolean,
        drag?: boolean,
        accept?: string,
        fileList?: any,
        listType?: 'text' | 'picture' | 'picture-card',
        autoUpload?: boolean,
        disabled?: boolean,
        limit?: number,
    },
}

export interface ValidateFieldCallback {
    (message?: string, invalidFields?: ValidateFieldsError): void,
}

export interface FormInstance {
    registerLabelWidth(width: number, oldWidth: number): void,
    deregisterLabelWidth(width: number): void,
    autoLabelWidth: string | undefined,
    emit: (evt: string, ...args: any[]) => void,
    labelSuffix: string,
    inline?: boolean,
    model?: Record<string, unknown>,
    size?: string,
    showMessage?: boolean,
    labelPosition?: string,
    labelWidth?: string,
    rules?: Record<string, unknown>,
    statusIcon?: boolean,
    hideRequiredAsterisk?: boolean,
    disabled?: boolean,
    validate: (callback?: Callback) => Promise<boolean>,
    resetFields: () => void,
    clearValidate: (props?: string | string[]) => void,
    validateField: (props: string | string[], cb: ValidateFieldCallback) => void,
}