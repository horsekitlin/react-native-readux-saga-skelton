import { localDomain } from './libs/route';
import { fetchPostWithToken, fetchGet, fetchGetWithToken, fetchPutWithToken, fetchPost } from './libs/fetch';

export const loginResult = (payload) =>
  fetchPost(localDomain('login'), payload)

// export const getAboutUsResult = ({ customHeaders, ...qs }) =>
//   fetchPostWithToken(localDomain('information/getInformationListByInformationType'), customHeaders, {}, qs);

// export const getInformationResult = ({ customHeaders }) =>
//   fetchPostWithToken(localDomain('information/getInformationListExculeBannerAbout'), customHeaders);

// /** 取得帳戶綁定工具包 */
// export const getAccountToolListResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('account/getAccountToolList'), customHeaders);

// /** 取得銀行代碼表 */
// export const getBankCodeResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('sys/getBankList'), customHeaders);

// /** 取出交易明細 */
// export const getTransactionDetailResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('transaction/queryTransactionDetail'), customHeaders, payload);

// export const getUserDataResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('user/getUserData'), customHeaders);

// export const getUserQuotaResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('sys/getAddingQuotaLimit'), customHeaders);

// export const getAccountBindingApprovedInfoResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('account/getAccountBindingApprovedInfo'), customHeaders);

// export const updateUserDataResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('user/modifyTheUser'), customHeaders, payload);

// export const updateUserQuotaResult = ({ customHeaders, ...qs }) =>
//   fetchPostWithToken(localDomain('user/applyAddingUserQuota'), customHeaders, {}, qs);

// /** 取出客服窗口 */
// export const getCustomServiceUrlResult = () =>
//   fetchGetWithToken(localDomain('sys/getCustomerServiceUrl'));

// /** 新增提領帳戶 */
// export const addWithdrawInfoResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('withdrawal/addWithdraw'), customHeaders, payload, {});

// /** 取得返利提領資訊 */
// export const getWithdrawInfoResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('withdrawal/getWithdrawInfo'), customHeaders);

// /** 編輯提領帳戶 */
// export const updateWithdrawInfoResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('withdrawal/editWithdraw'), customHeaders, payload, {});

// /** 刪除提領帳戶 */
// export const deleteWithdrawInfoResult = ({ customHeaders }, accountNo) =>
//   fetchPostWithToken(localDomain(`withdrawal/delWithdraw/${accountNo}`), customHeaders, {}, {});

// /** 設定是否自動提領 */
// export const updateWithdrawSettingResult = ({ customHeaders }, boolean) =>
//   fetchPostWithToken(localDomain(`withdrawal/autoWithdrawSetting/${boolean}`), customHeaders, {}, {});

// /** 提領金額 */
// export const setWithdrawValueResult = ({ customHeaders }, account, value) =>
//   fetchPostWithToken(localDomain(`withdrawal/withdrawByUser/${account}/${value}`), customHeaders, {}, {});

// /** 取得手動提現最小金額 */
// export const getManualWithdrawValueResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('sys/getManualWithdrawLimit'), customHeaders);

// /** 取得 Banner 詳細資訊 */
// export const getBannerDetailListResult = ({ customHeaders }) =>
//   fetchPostWithToken(localDomain('information/getBannerDetailList'), customHeaders);

// /** 取得 Banner interval */
// export const getBannerIntervalResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('information/getBannerInterval'), customHeaders);

// /** 取會員返利資訊 */
// export const getUserProfitResult = ({ customHeaders }) =>
//   fetchPostWithToken(localDomain('user/getUserProfit'), customHeaders);

// /** 註冊 */
// export const registerResult = (payload) =>
//   fetchPostWithToken(localDomain('registry/registerAUser'), {}, payload);

// /** 登入 */
// export const loginResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('login'), customHeaders, payload);

// /** 取得帳戶綁定資訊 */
// export const getAccountResult = ({ customHeaders }) =>
//   fetchPostWithToken(localDomain('account/getAccountBindingInfo'), customHeaders);

// /** 取得已審核通過帳戶綁定資訊 */
// export const getAccountApprovedResult = ({ customHeaders }) =>
//   fetchPostWithToken(localDomain('account/getAccountBindingApprovedInfo'), customHeaders);

// /** 添加帳戶綁定 */
// export const addAccountResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('account/addAccount'), customHeaders, payload);

// /** 修改帳戶綁定 */
// export const editAccountResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('account/editAccount'), customHeaders, payload);

// export const addUserUnionpayCredit = ({ customHeaders, ...qs }) =>
//   fetchPostWithToken(localDomain('user/applyAddingUserCredit'), customHeaders, {}, qs);

// export const getWithdrawDetailResult = ({ customHeaders, ...payload }) =>
//   fetchPostWithToken(localDomain('user/getWithdrawDetail'), customHeaders, payload);

// /** 取得帳戶手機號碼 */
// export const getBankPhoneResult = ({ customHeaders }) =>
//   fetchGetWithToken(localDomain('account/getBankPhone'), customHeaders);

// /** 修改帳戶手機號碼 */
// export const editBankPhoneResult = ({ customHeaders, ...payload }) =>
//   fetchPutWithToken(localDomain('account/editBankPhone'), customHeaders, payload);

// /** 充值明細查詢 */
// export const getRechargeDetailResult = ({ customHeaders, ...payload}) =>
//   fetchPostWithToken(localDomain('user/getRechargeDetail'), customHeaders, payload);