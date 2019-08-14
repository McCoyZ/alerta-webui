(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{1711:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-fab-transition",[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms",value:e.perms,expression:"perms"}],key:"add",attrs:{color:"accent",fab:"",fixed:"",bottom:"",right:""},on:{click:e.addToList}},[s("v-icon",{attrs:{color:"white"}},[e._v("\n      add\n    ")])],1)],1)},a=[],r={props:{perms:{type:String,required:!0}},methods:{addToList:function(){this.$emit("add-to-list")}}},n=r,o=s("2877"),l=s("6544"),d=s.n(l),c=s("8336"),u=s("0789"),m=s("132d"),p=Object(o["a"])(n,i,a,!1,null,null,null);t["a"]=p.exports;d()(p,{VBtn:c["a"],VFabTransition:u["b"],VIcon:m["a"]})},"1bb8":function(e,t,s){},"61db":function(e,t,s){"use strict";var i=s("1bb8"),a=s.n(i);a.a},"696f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"groups"},[s("group-list")],1)},a=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.listbox,callback:function(t){e.listbox=t},expression:"listbox"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            Add/Remove Users\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs9:""}},[s("v-autocomplete",{attrs:{disabled:e.isLoading,items:e.allUsers,autofocus:"",box:"",chips:"",label:"Add users","item-text":"name","item-value":"id"},on:{change:e.addUser},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{staticClass:"chip--select-multi",attrs:{selected:t.selected,close:""},on:{input:function(s){return e.removeUser(t.item)}}},[s("v-icon",[e._v("person")]),e._v("\n                      "+e._s(t.item.name)+"\n                    ")],1)]}},{key:"item",fn:function(t){return["object"!==typeof t.item?[s("v-list-tile-content",{domProps:{textContent:e._s(t.item)}})]:[s("v-list-tile-avatar",[s("v-icon",[e._v("person")])],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:e._s(t.item.name)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.item.email)}})],1)]]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("\n              "+e._s(e.groupName)+"\n            ")]),s("span",[e._v("Users in group")])])]),s("v-list",e._l(e.groupUsers,function(t){return s("v-list-tile",{key:t.id,attrs:{avatar:""},on:{click:function(s){return e.removeUser(t.id)}}},[s("v-list-tile-avatar",[s("v-icon",[e._v("person")])],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:e._s(t.name)}}),s("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.login)}})],1),s("v-list-tile-action",[s("v-icon",[e._v("\n                "+e._s("active"==t.status?"remove_circle":"remove_circle_outline")+"\n              ")])],1)],1)}),1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Close\n          ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.name,expression:"editedItem.name"}],attrs:{close:""},on:{click:function(t){e.editedItem.name=null}}},[s("strong",[e._v(e._s(e.editedItem.name))]),e._v(" \n                  "),s("span",[e._v("(group)")])])],1),s("v-text-field",{attrs:{label:"Group",rules:[e.rules.required],required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}}),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Description"},model:{value:e.editedItem.text,callback:function(t){e.$set(e.editedItem,"text",t)},expression:"editedItem.text"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            Save\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      Groups\n      "),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.groups,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),s("td",{staticClass:"text-xs-left"},[e._v("\n          "+e._s(t.item.text)+"\n        ")]),s("td",[e._v("\n          "+e._s(t.item.count)+"\n        ")]),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.addRemoveUsers(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              person_add\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          Sorry, nothing to display here :(\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n        Your search for "'+e._s(e.search)+'" found no results.\n      ')])],2)],1),s("list-button-add",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:groups"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("7f7f"),s("1711")),v={components:{ListButtonAdd:p["a"]},data:function(e){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},search:"",dialog:!1,headers:[{text:"Name",value:"name"},{text:"Description",value:"text"},{text:"Number of Users",value:"count"},{text:"Actions",value:"actions",sortable:!1}],editedId:null,editedItem:{name:null,text:""},menu1:!1,menu2:!1,defaultItem:{name:null,text:""},rules:{required:function(e){return!!e||"Required."}},groupId:null,groupName:"",listbox:!1,selected:null}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},groups:function(){return this.$store.state.groups.groups},groupUsers:function(){return this.$store.state.groups.users},allUsers:function(){return this.$store.state.users.users},isLoading:function(){return this.$store.state.groups.isLoading},formTitle:function(){return this.editedId?"Edit Group":"New Group"},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getGroups()}},created:function(){this.getUsers(),this.getGroups()},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getGroupUsers:function(e){this.$store.dispatch("groups/getGroupUsers",e)},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("groups/deleteGroup",e.id)},close:function(){var e=this;this.dialog=!1,this.listbox=!1,setTimeout(function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null,e.groupId=null,e.groupName="",e.$store.dispatch("groups/clearGroupUsers")},300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("groups/updateGroup",[this.editedId,{name:this.editedItem.name,text:this.editedItem.text}]):this.$store.dispatch("groups/createGroup",this.editedItem),this.close()},addRemoveUsers:function(e){this.groupId=e.id,this.groupName=e.name,this.getGroupUsers(this.groupId),this.listbox=!0},addUser:function(e){var t=this;this.$store.dispatch("groups/addUserToGroup",[this.groupId,e]),setTimeout(function(){t.$refs.form.reset(),t.selected=null},300)},removeUser:function(e){this.$store.dispatch("groups/removeUserFromGroup",[this.groupId,e])}}},h=v,f=(s("61db"),s("2877")),g=s("6544"),b=s.n(g),x=s("0798"),_=s("c6a6"),w=s("8336"),I=s("b0af"),k=s("99d9"),V=s("12b2"),C=s("cc20"),$=s("a523"),y=s("8fea"),P=s("169a"),S=s("0e8f"),T=s("4bd4"),L=s("132d"),A=s("a722"),U=s("8860"),G=s("ba95"),j=s("40fe"),O=s("c954"),B=s("5d23"),N=s("9910"),q=s("2677"),R=Object(f["a"])(h,u,m,!1,null,"e59e35d8",null),E=R.exports;b()(R,{VAlert:x["a"],VAutocomplete:_["a"],VBtn:w["a"],VCard:I["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:V["a"],VChip:C["a"],VContainer:$["a"],VDataTable:y["a"],VDialog:P["a"],VFlex:S["a"],VForm:T["a"],VIcon:L["a"],VLayout:A["a"],VList:U["a"],VListTile:G["a"],VListTileAction:j["a"],VListTileAvatar:O["a"],VListTileContent:B["a"],VListTileSubTitle:B["b"],VListTileTitle:B["c"],VSpacer:N["a"],VTextField:q["a"]});var F=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);F=d["a"]([Object(c["a"])({components:{GroupList:E}})],F);var D=F,M=D,H=Object(f["a"])(M,i,a,!1,null,null,null);t["default"]=H.exports},a0d4:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"perms"},[s("perm-list")],1)},a=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.match,expression:"editedItem.match"}],attrs:{close:""},on:{click:function(t){e.editedItem.match=null}}},[s("strong",[e._v(e._s(e.editedItem.match))]),e._v(" \n                  "),s("span",[e._v("(role)")])])],1),s("v-text-field",{attrs:{label:"Role",rules:[e.rules.required],required:""},model:{value:e.editedItem.match,callback:function(t){e.$set(e.editedItem,"match",t)},expression:"editedItem.match"}}),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-combobox",{attrs:{items:e.allowedScopes,label:"Scopes",chips:"",clearable:"",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n                      "),s("span",[e._v("(scope)")])])]}}]),model:{value:e.editedItem.scopes,callback:function(t){e.$set(e.editedItem,"scopes",t)},expression:"editedItem.scopes"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            Save\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      Permissions\n      "),s("v-spacer"),s("v-flex",{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[s("v-combobox",{attrs:{items:e.scopes,label:"Scopes",chips:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n              "),s("span",[e._v("(scope)")])])]}}]),model:{value:e.wantScopes,callback:function(t){e.wantScopes=t},expression:"wantScopes"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.perms,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,"custom-filter":e.customFilter,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[s("v-chip",{attrs:{small:""}},[s("strong",[e._v(e._s(t.item.match))]),e._v(" \n            "),s("span",[e._v("(role)")])]),s("v-tooltip",{attrs:{top:""}},[["admin","user"].includes(t.item.match)?s("v-icon",{attrs:{slot:"activator",small:""},slot:"activator"},[e._v("\n              lock\n            ")]):e._e(),s("span",[e._v("System role")])],1)],1),s("td",e._l(t.item.scopes,function(t){return s("v-chip",{key:t,attrs:{small:""}},[s("strong",[e._v(e._s(t))]),e._v(" \n            "),s("span",[e._v("(scope)")])])}),1),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:"",disabled:["admin","user"].includes(t.item.match)},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:"",disabled:["admin","user"].includes(t.item.match)},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          Sorry, nothing to display here :(\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n        Your search for "'+e._s(e.search)+'" found no results.\n      ')])],2)],1),s("list-button-add",{attrs:{perms:"admin:perms"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("4917"),s("ac6a"),s("456d"),s("6762"),s("2fdb"),s("1711")),v=s("b74e"),h={components:{ListButtonAdd:p["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",wantScopes:[],dialog:!1,headers:[{text:"Role",value:"match"},{text:"Scopes",value:"scopes"},{text:"Actions",value:"name",sortable:!1}],editedId:null,editedItem:{match:"",scopes:[]},defaultItem:{match:"",scopes:[]},rules:{required:function(e){return!!e||"Required."}}}},computed:{perms:function(){return this.$store.state.perms.permissions},scopes:function(){return this.$store.state.perms.scopes},allowedScopes:function(){return v["a"].getAllowedScopes(this.$store.getters["auth/scopes"],this.$store.state.perms.scopes)},isLoading:function(){return this.$store.state.perms.isLoading},formTitle:function(){return this.editedId?"Edit Permission":"New Permission"},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getPerms()}},created:function(){this.getPerms(),this.getScopes()},methods:{getPerms:function(){this.$store.dispatch("perms/getPerms")},getScopes:function(){this.$store.dispatch("perms/getScopes")},filterByScopes:function(e){this.wantScopes=e},customFilter:function(e,t,s){var i=this;return e=e.filter(function(e){return i.wantScopes.length>0?e.scopes.some(function(e){return i.wantScopes.includes(e)}):e}),""===t.trim()?e:e.filter(function(e){return Object.keys(e).some(function(i){return s(e[i],t)})})},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("perms/deletePerm",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null},300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("perms/updatePerm",[this.editedId,{match:this.editedItem.match,scopes:this.editedItem.scopes}]):this.$store.dispatch("perms/createPerm",this.editedItem),this.close()}}},f=h,g=s("2877"),b=s("6544"),x=s.n(b),_=s("0798"),w=s("8336"),I=s("b0af"),k=s("99d9"),V=s("12b2"),C=s("cc20"),$=s("2b5d"),y=s("a523"),P=s("8fea"),S=s("169a"),T=s("0e8f"),L=s("4bd4"),A=s("132d"),U=s("a722"),G=s("9910"),j=s("2677"),O=s("3a2f"),B=Object(g["a"])(f,u,m,!1,null,null,null),N=B.exports;x()(B,{VAlert:_["a"],VBtn:w["a"],VCard:I["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:V["a"],VChip:C["a"],VCombobox:$["a"],VContainer:y["a"],VDataTable:P["a"],VDialog:S["a"],VFlex:T["a"],VForm:L["a"],VIcon:A["a"],VLayout:U["a"],VSpacer:G["a"],VTextField:j["a"],VTooltip:O["a"]});var q=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);q=d["a"]([Object(c["a"])({components:{PermList:N}})],q);var R=q,E=R,F=Object(g["a"])(E,i,a,!1,null,null,null);t["default"]=F.exports},dfe8:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"customers"},[s("customer-list")],1)},a=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form"},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"Look Up",hint:"Use login, Keycloak role, GitHub org, GitLab group or email domain","persistent-hint":"",rules:[e.rules.required],required:""},model:{value:e.editedItem.match,callback:function(t){e.$set(e.editedItem,"match",t)},expression:"editedItem.match"}}),s("v-flex",{attrs:{xs12:""}},[s("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.editedItem.customer,expression:"editedItem.customer"}],attrs:{close:""},on:{click:function(t){e.editedItem.customer=null}}},[s("strong",[e._v(e._s(e.editedItem.customer))]),e._v(" \n                    "),s("span",[e._v("(customer)")])])],1),s("v-text-field",{attrs:{label:"Customer",rules:[e.rules.required],required:""},model:{value:e.editedItem.customer,callback:function(t){e.$set(e.editedItem,"customer",t)},expression:"editedItem.customer"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            Save\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      Customers\n      "),s("v-spacer"),s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.customers,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.match))]),s("td",[s("v-chip",[s("strong",[e._v(e._s(t.item.customer))]),e._v(" \n            "),s("span",[e._v("(customer)")])])],1),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          Sorry, nothing to display here :(\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n        Your search for "'+e._s(e.search)+'" found no results.\n      ')])],2)],1),s("list-button-add",{attrs:{perms:"admin:customers"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("4917"),s("1711")),v={components:{ListButtonAdd:p["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",dialog:!1,headers:[{text:"Look Up",value:"match"},{text:"Customer",value:"customer"},{text:"Actions",value:"name",sortable:!1}],editedId:null,editedItem:{match:null,customer:null},defaultItem:{match:null,customer:null},rules:{required:function(e){return!!e||"Required."}}}},computed:{customers:function(){return this.$store.state.customers.customers},isLoading:function(){return this.$store.state.customers.isLoading},formTitle:function(){return this.editedId?"Edit Customer":"New Customer"},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getCustomers()}},created:function(){this.getCustomers()},methods:{getCustomers:function(){this.$store.dispatch("customers/getCustomers")},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("customers/deleteCustomer",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.$refs.form.reset(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null},300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("customers/updateCustomer",[this.editedId,{match:this.editedItem.match,customer:this.editedItem.customer}]):this.$store.dispatch("customers/createCustomer",this.editedItem),this.close()}}},h=v,f=s("2877"),g=s("6544"),b=s.n(g),x=s("0798"),_=s("8336"),w=s("b0af"),I=s("99d9"),k=s("12b2"),V=s("cc20"),C=s("a523"),$=s("8fea"),y=s("169a"),P=s("0e8f"),S=s("4bd4"),T=s("132d"),L=s("a722"),A=s("9910"),U=s("2677"),G=Object(f["a"])(h,u,m,!1,null,null,null),j=G.exports;b()(G,{VAlert:x["a"],VBtn:_["a"],VCard:w["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:k["a"],VChip:V["a"],VContainer:C["a"],VDataTable:$["a"],VDialog:y["a"],VFlex:P["a"],VForm:S["a"],VIcon:T["a"],VLayout:L["a"],VSpacer:A["a"],VTextField:U["a"]});var O=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);O=d["a"]([Object(c["a"])({components:{CustomerList:j}})],O);var B=O,N=B,q=Object(f["a"])(N,i,a,!1,null,null,null);t["default"]=q.exports},ed81:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users"},[s("user-list")],1)},a=[],r=s("d225"),n=s("308d"),o=s("6bb5"),l=s("4e2b"),d=s("9ab4"),c=s("60a3"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-form",{ref:"form",attrs:{autocomplete:"off"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("\n            "+e._s(e.formTitle)+"\n          ")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:"Name",rules:[e.rules.required],required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[s("v-switch",{attrs:{"true-value":"active","false-value":"inactive",label:"Active"},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:"Login",rules:[e.rules.required],required:""},model:{value:e.editedItem.login,callback:function(t){e.$set(e.editedItem,"login",t)},expression:"editedItem.login"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md9:""}},[s("v-text-field",{attrs:{disabled:!e.isBasicAuth,label:"Email",rules:[e.rules.required],required:""},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[s("v-checkbox",{attrs:{label:"Verified"},model:{value:e.editedItem.email_verified,callback:function(t){e.$set(e.editedItem,"email_verified",t)},expression:"editedItem.email_verified"}})],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],staticClass:"input-group--focused",attrs:{"append-icon":e.showPassword?"visibility_off":"visibility",rules:e.isBasicAuth?[e.rules.min]:[],type:e.showPassword?"text":"password",name:"input-10-2",label:"Password",autocomplete:"new-password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}}),s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:"Password"}})],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{"append-icon":e.showPassword?"visibility_off":"visibility",rules:e.isBasicAuth?[e.rules.passwordMatch]:[],type:e.showPassword?"text":"password",name:"input-10-2",label:"Confirm Password",value:e.editedItem.confirmPassword,autocomplete:"new-password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}}}),s("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:"Confirm Password"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-select",{attrs:{items:e.allGroups,label:"Groups","item-text":"name","item-value":"id",chips:"",solo:"",multiple:"",disabled:!e.editedId},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item.name))]),e._v(" \n                      "),s("span",[e._v("(group)")])])]}}]),model:{value:e.userGroups,callback:function(t){e.userGroups=t},expression:"userGroups"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-combobox",{attrs:{items:e.allowedRoles,label:"Roles",chips:"",clearable:"",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n                      "),s("span",[e._v("(role)")])])]}}]),model:{value:e.editedItem.roles,callback:function(t){e.$set(e.editedItem,"roles",t)},expression:"editedItem.roles"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md12:""}},[s("v-text-field",{attrs:{label:"Comment"},model:{value:e.editedItem.text,callback:function(t){e.$set(e.editedItem,"text",t)},expression:"editedItem.text"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.close}},[e._v("\n            Cancel\n          ")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:e.validate}},[e._v("\n            Save\n          ")])],1)],1)],1)],1),s("v-card",[s("v-card-title",{staticClass:"title"},[e._v("\n      Users\n      "),s("v-spacer"),s("v-flex",{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[s("v-combobox",{attrs:{items:e.allowedRoles,label:"Roles",chips:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[s("v-chip",{attrs:{selected:t.selected,close:""}},[s("strong",[e._v(e._s(t.item))]),e._v(" \n              "),s("span",[e._v("(role)")])])]}}]),model:{value:e.wantRoles,callback:function(t){e.wantRoles=t},expression:"wantRoles"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),s("v-data-table",{staticClass:"px-2",attrs:{headers:e.headers,items:e.users,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,search:e.search,"custom-filter":e.customFilter,loading:e.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[e._v(e._s(t.item.name))]),s("td",{staticClass:"text-xs-center"},[s("v-tooltip",{attrs:{top:""}},[s("v-icon",{attrs:{slot:"activator",color:"active"==t.item.status?"primary":""},on:{click:function(s){return e.toggleUserStatus(t.item)}},slot:"activator"},[e._v("\n              "+e._s("active"===t.item.status?"toggle_on":"toggle_off")+"\n            ")]),s("span",[e._v(e._s(e._f("capitalize")(t.item.status)))])],1)],1),s("td",[e._v(e._s(t.item.login))]),s("td",[e._v(e._s(t.item.email))]),s("td",{staticClass:"text-xs-center"},[s("v-tooltip",{attrs:{top:""}},[s("v-icon",{attrs:{slot:"activator"},on:{click:function(s){return e.toggleEmailVerified(t.item)}},slot:"activator"},[e._v("\n              "+e._s(t.item.email_verified?"check_box":"check_box_outline_blank")+"\n            ")]),s("span",[e._v("\n              "+e._s(t.item.email_verified?"Email Verified":"Email not verified")+"\n            ")])],1)],1),s("td",e._l(t.item.roles,function(t){return s("v-chip",{key:t},[s("strong",[e._v(e._s(t))]),e._v(" \n            "),s("span",[e._v("(role)")])])}),1),s("td",{staticClass:"text-xs-right"},[s("date-time",{attrs:{value:t.item.createTime,format:"mediumDate"}})],1),s("td",{staticClass:"text-xs-right"},[t.item.lastLogin?s("date-time",{attrs:{value:t.item.lastLogin,format:"mediumDate"}}):e._e()],1),s("td",{staticClass:"text-xs-right"},[e._v("\n          "+e._s(t.item.text)+"\n        ")]),s("td",{staticClass:"text-no-wrap"},[s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(s){return e.editItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              edit\n            ")])],1),s("v-btn",{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(s){return e.deleteItem(t.item)}}},[s("v-icon",{attrs:{small:"",color:"grey darken-3"}},[e._v("\n              delete\n            ")])],1)],1)]}}])},[s("template",{slot:"no-data"},[s("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n          Sorry, nothing to display here :(\n        ")])],1),s("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n        Your search for "'+e._s(e.search)+'" found no results.\n      ')])],2)],1),s("list-button-add",{directives:[{name:"show",rawName:"v-show",value:e.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:users"},on:{"add-to-list":function(t){e.dialog=!0}}})],1)},m=[],p=(s("7f7f"),s("ac6a"),s("456d"),s("6762"),s("2fdb"),s("6377")),v=s("1711"),h={components:{DateTime:p["a"],ListButtonAdd:v["a"]},data:function(e){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},search:"",wantRoles:[],dialog:!1,headers:[{text:"Name",value:"name"},{text:"Status",value:"status"},{text:"Login",value:"login"},{text:"Email",value:"email"},{text:"Verified?",value:"email_verified"},{text:"Roles",value:"roles"},{text:"Created",value:"createTime"},{text:"Last Login",value:"lastLogin"},{text:"Comment",value:"text"},{text:"Actions",value:"name",sortable:!1}],editedId:null,editedItem:{name:"",status:e.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},editedGroups:null,defaultItem:{name:"",status:e.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},showPassword:!1,rules:{required:function(e){return!!e||"Required."},min:function(t){return e.editedId&&null==t||t&&t.length>=6||"Min 6 characters"},passwordMatch:function(t){return e.editedId&&null==t||t&&t==e.editedItem.password||"Passwords entered don't match"}}}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},users:function(){return this.$store.state.users.users},allGroups:function(){return this.$store.state.groups.groups},userGroups:{get:function(){return this.$store.state.users.groups},set:function(e){this.editedGroups=e}},allowedRoles:function(){return this.$store.getters["perms/roles"]},isLoading:function(){return this.$store.state.users.isLoading},formTitle:function(){return this.editedId?"Edit User":"New User"},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(e){e||this.close()},refresh:function(e){e||this.getUsers()}},created:function(){this.getUsers(),this.getGroups(),this.getPerms(),this.editedItem=Object.assign({},this.defaultItem)},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getUserGroups:function(e){this.$store.dispatch("users/getUserGroups",e)},getPerms:function(){this.$store.dispatch("perms/getPerms")},filterByRoles:function(e){this.wantRoles=e},customFilter:function(e,t,s){var i=this;return e=e.filter(function(e){return i.wantRoles.length>0?e.roles.some(function(e){return i.wantRoles.includes(e)}):e}),""===t.trim()?e:e.filter(function(e){return Object.keys(e).some(function(i){return s(e[i],t)})})},toggleUserStatus:function(e){this.$store.dispatch("users/setUserStatus",[e.id,"active"===e.status?"inactive":"active"])},toggleEmailVerified:function(e){this.$store.dispatch("users/setEmailVerified",[e.id,!e.email_verified])},editItem:function(e){this.editedId=e.id,this.editedItem=Object.assign({},e),this.getUserGroups(e.id),this.editedGroups=null,this.$refs.form.resetValidation(),this.dialog=!0},deleteItem:function(e){confirm("Are you sure you want to delete this item?")&&this.$store.dispatch("users/deleteUser",e.id)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.$refs.form.resetValidation(),e.editedItem=Object.assign({},e.defaultItem),e.editedId=null},300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){var e=this;if(this.editedId){if(this.$store.dispatch("users/updateUser",[this.editedId,{name:this.editedItem.name,email:this.editedItem.email,password:this.editedItem.password,status:this.editedItem.status,roles:this.editedItem.roles,text:this.editedItem.text,email_verified:this.editedItem.email_verified}]),this.editedGroups){var t=this.editedGroups.filter(function(t){return!e.userGroups.map(function(e){return e.id}).includes(t)}),s=this.userGroups.map(function(e){return e.id}).filter(function(t){return!e.editedGroups.includes(t)});t.map(function(t){return e.$store.dispatch("groups/addUserToGroup",[t,e.editedId])}),s.map(function(t){return e.$store.dispatch("groups/removeUserFromGroup",[t,e.editedId])})}}else this.$store.dispatch("users/createUser",this.editedItem);this.close()}}},f=h,g=s("2877"),b=s("6544"),x=s.n(b),_=s("0798"),w=s("8336"),I=s("b0af"),k=s("99d9"),V=s("12b2"),C=s("ac7c"),$=s("cc20"),y=s("2b5d"),P=s("a523"),S=s("8fea"),T=s("169a"),L=s("0e8f"),A=s("4bd4"),U=s("132d"),G=s("a722"),j=s("b56d"),O=s("9910"),B=s("b73d"),N=s("2677"),q=s("3a2f"),R=Object(g["a"])(f,u,m,!1,null,null,null),E=R.exports;x()(R,{VAlert:_["a"],VBtn:w["a"],VCard:I["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:V["a"],VCheckbox:C["a"],VChip:$["a"],VCombobox:y["a"],VContainer:P["a"],VDataTable:S["a"],VDialog:T["a"],VFlex:L["a"],VForm:A["a"],VIcon:U["a"],VLayout:G["a"],VSelect:j["a"],VSpacer:O["a"],VSwitch:B["a"],VTextField:N["a"],VTooltip:q["a"]});var F=function(e){function t(){return Object(r["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(c["c"]);F=d["a"]([Object(c["a"])({components:{UserList:E}})],F);var D=F,M=D,H=Object(g["a"])(M,i,a,!1,null,null,null);t["default"]=H.exports}}]);
//# sourceMappingURL=admin.b06ab880.js.map