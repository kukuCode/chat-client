(window.webpackJsonp = window.webpackJsonp || []).push([['one2one'], { '7f6a': function (e, t, n) { 'use strict'; var r = n('ed76'); var a = n.n(r); n.d(t, 'default', function () { return a.a }) }, ea68: function (e, t, n) { 'use strict'; n.r(t); var r = function () { var e = this; var t = e.$createElement; var n = e._self._c || t; return n('div', { class: e.$style.rtcInner }, [n('div', [n('video', { ref: 'outVideo' })]), n('div', [n('video', { ref: 'outReceive' })]), n('div', [n('video', { ref: 'inVideo' })]), n('v-btn', { on: { click: e.sendCall } }, [e._v('呼叫')]), n('v-btn', { on: { click: e.disconnect } }, [e._v('断开')])], 1) }; var a = []; var i = (n('7db0'), n('b0c0'), n('b85c')); var o = (n('96cf'), n('1da1')); var c = n('d4ec'); var s = n('bee2'); var u = n('262e'); var d = n('2caf'); var l = n('9ab4'); var v = n('1b40'); var p = (function (e) { Object(u.a)(n, e); var t = Object(d.a)(n); function n () { var e; return Object(c.a)(this, n), e = t.apply(this, arguments), e.mediaStream = null, e.peerOut = new RTCPeerConnection(), e.peerIn = new RTCPeerConnection(), e } return Object(s.a)(n, [{ key: 'sendOffer', value: (function () { var e = Object(o.a)(regeneratorRuntime.mark(function e () { var t, n, r, a; return regeneratorRuntime.wrap(function (e) { while (1) switch (e.prev = e.next) { case 0:return t = this.peerOut, n = this.peerIn, e.next = 3, t.createOffer(); case 3:return r = e.sent, e.next = 6, t.setLocalDescription(r); case 6:return e.next = 8, n.setRemoteDescription(r); case 8:return n.addStream(this.mediaStream), e.next = 11, n.createAnswer(); case 11:return a = e.sent, e.next = 14, n.setLocalDescription(a); case 14:return e.next = 16, t.setRemoteDescription(a); case 16:case 'end':return e.stop() } }, e, this) })); function t () { return e.apply(this, arguments) } return t }()) }, { key: 'sendCall', value: (function () { var e = Object(o.a)(regeneratorRuntime.mark(function e () { var t, n, r, a, i, o; return regeneratorRuntime.wrap(function (e) { while (1) switch (e.prev = e.next) { case 0:return e.prev = 0, t = this.outVideo, n = this.peerOut, r = this.peerIn, a = navigator, i = a.mediaDevices, e.next = 5, i.enumerateDevices(); case 5:return o = e.sent, o.find(function (e) { return e.kind === 'audioinput' }) || alert('设备不支持音频'), o.find(function (e) { return e.kind === 'videoinput' }) || alert('设备不支持视频'), e.next = 10, i.getUserMedia({ video: !0, audio: !0 }); case 10:return this.mediaStream = e.sent, t.srcObject = this.mediaStream, n.addStream(this.mediaStream), n.onicecandidate = function (e) { e.candidate && r.addIceCandidate(e.candidate) }, e.next = 16, t.play(); case 16:return e.next = 18, this.sendOffer(); case 18:e.next = 23; break; case 20:e.prev = 20, e.t0 = e.catch(0), e.t0.name === 'TypeError' ? alert('当前环境不支持视频通话') : e.t0.name === 'NotAllowedError' ? alert('请允许使用摄像头') : e.t0.name === 'AbortError' ? console.log('中止') : e.t0.name === 'NotFoundError' ? console.log('找不到') : e.t0.name === 'OverConstrainedError' ? console.log('设备无法满足要求') : e.t0.name === 'SecurityError' && console.log('由于安全原因，被禁止'); case 23:case 'end':return e.stop() } }, e, this, [[0, 20]]) })); function t () { return e.apply(this, arguments) } return t }()) }, { key: 'disconnect', value: function () { var e; var t; var n = (e = (t = this.mediaStream) === null || void 0 === t ? void 0 : t.getTracks()) !== null && void 0 !== e ? e : []; this.peerOut.close(), this.peerIn.close(); var r; var a = Object(i.a)(n); try { for (a.s(); !(r = a.n()).done;) { var o = r.value; o.stop() } } catch (c) { a.e(c) } finally { a.f() } } }, { key: 'mounted', value: function () { var e = this; this.peerIn.onaddstream = function (t) { e.inVideo.srcObject = t.stream, e.inVideo.play() }, this.peerOut.onaddstream = function (t) { e.outReceive.srcObject = t.stream, e.outReceive.play() } } }]), n }(v.d)); Object(l.a)([Object(v.c)('outReceive')], p.prototype, 'outReceive', void 0), Object(l.a)([Object(v.c)('outVideo')], p.prototype, 'outVideo', void 0), Object(l.a)([Object(v.c)('inVideo')], p.prototype, 'inVideo', void 0), p = Object(l.a)([v.a], p); var f = p; var m = f; var h = n('7f6a'); var b = n('2877'); var O = n('6544'); var y = n.n(O); var j = n('8336'); function w (e) { this.$style = h.default.locals || h.default } var x = Object(b.a)(m, r, a, !1, w, null, null); t.default = x.exports; y()(x, { VBtn: j.a }) }, ed76: function (e, t, n) { e.exports = { rtcInner: 'one2one_rtcInner_3ewLw' } } }])
// # sourceMappingURL=one2one.695566d0.js.map