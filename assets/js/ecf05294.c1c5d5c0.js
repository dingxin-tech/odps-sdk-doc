"use strict";(self.webpackChunkodps_sdk_doc=self.webpackChunkodps_sdk_doc||[]).push([[832],{7048:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var s=c(5893),r=c(1151);const i={title:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef",sidebar_label:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef",sidebar_position:1},d="\u6784\u5efa ODPS \u5ba2\u6237\u7aef",l={id:"example-code/init-odps-client",title:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef",description:"\u672c\u6587\u6863\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u591a\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u6784\u5efa\u963f\u91cc\u4e91MaxCompute\uff08\u539fODPS\uff09\u5ba2\u6237\u7aef\u5b9e\u4f8b\u3002MaxCompute\u662f\u4e00\u79cd\u5927\u89c4\u6a21\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u670d\u52a1\uff0c\u672cSDK\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u96c6\u6210\u548c\u4f7f\u7528\u8be5\u670d\u52a1\u3002",source:"@site/docs/example-code/init-odps-client.md",sourceDirName:"example-code",slug:"/example-code/init-odps-client",permalink:"/odps-sdk-doc/example-code/init-odps-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef",sidebar_label:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7801\u793a\u4f8b",permalink:"/odps-sdk-doc/category/\u4ee3\u7801\u793a\u4f8b"},next:{title:"\u6267\u884c SQL",permalink:"/odps-sdk-doc/example-code/execute-sql"}},a={},t=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"\u4f7f\u7528AccessKey\u6784\u5efa\u5ba2\u6237\u7aef",id:"\u4f7f\u7528accesskey\u6784\u5efa\u5ba2\u6237\u7aef",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3},{value:"\u4f7f\u7528STS Token\u6784\u5efa\u5ba2\u6237\u7aef",id:"\u4f7f\u7528sts-token\u6784\u5efa\u5ba2\u6237\u7aef",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:3},{value:"\u4f7f\u7528\u963f\u91cc\u4e91CredentialProvider\u6784\u5efa\u5ba2\u6237\u7aef",id:"\u4f7f\u7528\u963f\u91cc\u4e91credentialprovider\u6784\u5efa\u5ba2\u6237\u7aef",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:3},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\u6784\u5efa\u5ba2\u6237\u7aef",id:"\u4f7f\u7528\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\u6784\u5efa\u5ba2\u6237\u7aef",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-3",level:3},{value:"\u4f7f\u7528Bearer Token\u6784\u5efa\u5ba2\u6237\u7aef",id:"\u4f7f\u7528bearer-token\u6784\u5efa\u5ba2\u6237\u7aef",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-4",level:3},{value:"\u751f\u6210Bearer Token",id:"\u751f\u6210bearer-token",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5-1",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u6784\u5efa-odps-\u5ba2\u6237\u7aef",children:"\u6784\u5efa ODPS \u5ba2\u6237\u7aef"})}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u591a\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u6784\u5efa\u963f\u91cc\u4e91MaxCompute\uff08\u539fODPS\uff09\u5ba2\u6237\u7aef\u5b9e\u4f8b\u3002MaxCompute\u662f\u4e00\u79cd\u5927\u89c4\u6a21\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u670d\u52a1\uff0c\u672cSDK\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u96c6\u6210\u548c\u4f7f\u7528\u8be5\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8AccessKey%E6%9E%84%E5%BB%BA%E5%AE%A2%E6%88%B7%E7%AB%AF",children:"\u4f7f\u7528AccessKey\u6784\u5efa\u5ba2\u6237\u7aef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8STS-Token%E6%9E%84%E5%BB%BA%E5%AE%A2%E6%88%B7%E7%AB%AF",children:"\u4f7f\u7528STS Token\u6784\u5efa\u5ba2\u6237\u7aef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8%E9%98%BF%E9%87%8C%E4%BA%91CredentialProvider%E6%9E%84%E5%BB%BA%E5%AE%A2%E6%88%B7%E7%AB%AF",children:"\u4f7f\u7528\u963f\u91cc\u4e91CredentialProvider\u6784\u5efa\u5ba2\u6237\u7aef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8%E5%8F%8C%E9%87%8D%E7%AD%BE%E5%90%8D%E8%AE%A4%E8%AF%81%E6%9E%84%E5%BB%BA%E5%AE%A2%E6%88%B7%E7%AB%AF",children:"\u4f7f\u7528\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\u6784\u5efa\u5ba2\u6237\u7aef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BD%BF%E7%94%A8Bearer-Token%E6%9E%84%E5%BB%BA%E5%AE%A2%E6%88%B7%E7%AB%AF",children:"\u4f7f\u7528Bearer Token\u6784\u5efa\u5ba2\u6237\u7aef"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528accesskey\u6784\u5efa\u5ba2\u6237\u7aef",children:"\u4f7f\u7528AccessKey\u6784\u5efa\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u9700\u8981\u7528\u6237\u63d0\u4f9bAccessId\u548cAccessKey\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public static Odps buildWithAccessKey(String accessId, String accessKey) {\n  Account account = new AliyunAccount(accessId, accessKey);\n  Odps odps = new Odps(account);\n  odps.setEndpoint(SAMPLE_ENDPOINT);\n  return odps;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair",children:"\u5982\u4f55\u521b\u5efa\u548c\u83b7\u53d6AccessKey"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528sts-token\u6784\u5efa\u5ba2\u6237\u7aef",children:"\u4f7f\u7528STS Token\u6784\u5efa\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u9002\u7528\u4e8e\u4e34\u65f6\u6388\u6743\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801-1",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public static Odps buildWithStsToken(String accessId, String accessKey, String stsToken) {\n  Account account = new StsAccount(accessId, accessKey, stsToken);\n  Odps odps = new Odps(account);\n  odps.setEndpoint(SAMPLE_ENDPOINT);\n  return odps;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u963f\u91cc\u4e91credentialprovider\u6784\u5efa\u5ba2\u6237\u7aef",children:"\u4f7f\u7528\u963f\u91cc\u4e91CredentialProvider\u6784\u5efa\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u9002\u7528\u4e8e\u5982ECS\u5b9e\u4f8b\u4e0a\u7684RAM\u89d2\u8272\u6388\u6743\u7b49\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801-2",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public static Odps buildWithCredentialProvider(ICredentialProvider credentialProvider) {\n  Account account = new AklessAccount(credentialProvider);\n  Odps odps = new Odps(account);\n  odps.setEndpoint(SAMPLE_ENDPOINT);\n  return odps;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["CredentialProvider \u662f\u963f\u91cc\u4e91\u63d0\u4f9b\u7684\u4e00\u79cd\u65e0AK\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5b83\u5b9e\u9645\u4e0a\u63d0\u4f9b\u4e86\u4e00\u79cd\u57fa\u4e8eSTS Token\u7684\u751f\u6210\u548c\u81ea\u52a8\u8f6e\u6362\u673a\u5236\u3002\u963f\u91cc\u4e91\u7684",(0,s.jsx)(n.code,{children:"aliyun-java-auth"}),"\u5305\u63d0\u4f9b\u4e86\u591a\u79cd",(0,s.jsx)(n.code,{children:"ICredentialProvider"}),"\u7684\u5b9e\u73b0\uff0c\u4f8b\u5982",(0,s.jsx)(n.code,{children:"DefaultCredentialProvider"}),"\u548c",(0,s.jsx)(n.code,{children:"RamRoleArnCredentialProvider"}),"\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u4e0d\u540c\u7684\u5b9e\u73b0\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\u6784\u5efa\u5ba2\u6237\u7aef",children:"\u4f7f\u7528\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\u6784\u5efa\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"\u67d0\u4e9b\u5e94\u7528\u9700\u8981\u53cc\u91cd\u7b7e\u540d\u8ba4\u8bc1\uff08\u672c\u8d28\u4e0a\u662f\u4f7f\u7528\u4e00\u7ec4AK\u8fdb\u884c\u5e94\u7528\u6807\u8bc6\uff0c\u53e6\u4e00\u7ec4AK\u8fdb\u884c\u7528\u6237\u6807\u8bc6\uff09\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801-3",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public static Odps buildWithDualSignature(String accessId, String accessKey, String appAccessId, String appAccessKey) {\n  AppAccount appAccount = new AppAccount(new AliyunAccount(appAccessId, appAccessKey));\n  Account account = new AliyunAccount(accessId, accessKey);\n  Odps odps = new Odps(account, appAccount);\n  odps.setEndpoint(SAMPLE_ENDPOINT);\n  return odps;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528bearer-token\u6784\u5efa\u5ba2\u6237\u7aef",children:"\u4f7f\u7528Bearer Token\u6784\u5efa\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.p,{children:"Bearer Tokens\u901a\u5e38\u7528\u4e8e\u77ed\u671f\u8bbf\u95ee\u6388\u6743\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801-4",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public static Odps buildWithBearerToken(String bearerToken) {\n  Account account = new BearerTokenAccount(bearerToken);\n  Odps odps = new Odps(account);\n  odps.setEndpoint(SAMPLE_ENDPOINT);\n  return odps;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u751f\u6210bearer-token",children:"\u751f\u6210Bearer Token"}),"\n",(0,s.jsx)(n.p,{children:"Bearer Token\u7684\u751f\u6210\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// \u793a\u4f8b\u4ee3\u7801\nSecurityManager sm = new SecurityManager();\nString policy = "<your policy>";\nString bearerToken = sm.generateAuthorizationToken(policy, "BEARER");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003\u94fe\u63a5-1",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute",children:"\u963f\u91cc\u4e91MaxCompute\u5b98\u65b9\u6587\u6863"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/getting-started/prepare-a-ram-user",children:"\u963f\u91cc\u4e91RAM\u7528\u6237\u6307\u5357"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/policy-based-access-control-1",children:"Policy \u6743\u9650\u63a7\u5236\u6587\u6863"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.aliyun.com/zh/sdk/developer-reference/v2-java-integrated-sdk",children:"\u963f\u91cc\u4e91 CredentialProvider \u4f7f\u7528\u6587\u6863"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>d});var s=c(7294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);