// Title: COOLjsTree
// URL: http://javascript.cooldev.com/scripts/cooltree/
// Version: 2.8.7a
// Last Modify: 4 Feb 2007
// Notes: Registration needed to use this script on your web site.
// Copyright (c) 2001-2005 by CoolDev.Com
// Copyright (c) 2001-2005 by Sergey Nosenko
// Options: PROFESSIONAL, COMPRESSED
(function() {
    function _2o(_6) {
        return typeof _6 == 'function'
    };

    function _i(_6) {
        return typeof _6 == 'undefined'
    };

    function _3J(_6) {
        return typeof _6 == 'number'
    };

    function _3M(_6) {
        return typeof _6 == 'object'
    };

    function _A(_25) {
        this._L = [_i(_25) ? '' : _25]
    };
    _A.prototype = {
        _24: function(_2_) {
            this._L.splice(0, 0, [_2_]);
            return this
        },
        _18: function(_b) {
            this._L[this._L.length] = _b;
            return this
        },
        _3O: function(_b) {
            this._L = this._L.concat(_b._L);
            return this
        },
        _37: function() {
            var _b = this._I(),
                _9 = [],
                _x = 0;
            while ((_x = _b.indexOf('{', _x)) != -1 && _b.length - _x > 2)
                if (_b.charAt(_x + 2) == '}') {
                    _9[_9.length] = _b.slice(0, _x);
                    _9[_9.length] = parseInt(_b.charAt(_x + 1));
                    _b = _b.slice(_x + 3);
                    _x = 0
                };
            return _9.concat([_b])
        },
        _16: function(_1x, _2R) {
            this._18(_1x[0]);
            for (var i = 1; i < _1x.length; i += 2) this._18(_2R[_1x[i]])._18(_1x[i + 1]);
            return this
        },
        _I: function() {
            return this._L.join('')
        }
    };

    function _a(_e, _h, _2, _31, _15) {
        this.name = this._e = _e;
        this.bw = new _a._29();
        with(_a._1y.prototype) {
            if (this.bw.gecko) _F = _36;
            else if (this.bw.ns4) _F = _34;
            else if (this.bw.operaNew) _F = _2Z;
            else if (this.bw._R) _F = _2P;
            else _F = _2Q;
            if (this.bw.ns4) _Q = _2M;
            else _Q = _2W
        };
        var _1T = {
            _y: _2[0],
            _C: _2[1],
            _1c: {
                nb: _2[2],
                nf: _2[5]
            },
            _3h: _2[3],
            _1u: _2[3][2],
            _1n: _2[4][0],
            _1l: _2[4][1],
            _3y: _2[4][2],
            _3z: _2[6],
            _1w: _2[7][0],
            _1j: _2[7][1],
            _1S: _2[8],
            __: _2[10],
            _3t: _2[11],
            _3A: _2[12],
            _3s: _2[13][0],
            _3D: _2[13][1],
            exp: _2[14],
            expimg: _2[15],
            expimgsize: _2[16],
            cook: _2[17],
            rel: _2[18],
            rels: _2[19],
            resize: _2[20],
            sel: _2[21],
            selC: _2[22],
            _3I: _2[22] ? _2[22][2] : '',
            _3H: _2[22] ? _2[22][3] : '',
            _1p: _2[23] || 0,
            _3B: _2[24] || 'middle'
        };
        if (_1T._1c.nb) _2i(_2[3]);
        if (_1T._1c.nf) _2i(_2[6]);
        this._2 = _1T;
        this._1v = null;
        if (!this.bw._14) this._10 = new _a._20(_2[9], this);
        if (_i(window.CTrees)) window.CTrees = {};
        window.CTrees[_e] = this;
        this.jsPath = "window.CTrees['" + _e + "']";
        this.Nodes = this._h = [];
        this._3E = -1;
        this._3F = 0;
        this._1E = {};
        this._n = this._1a(([{
                id: null
            }, '', null, null,
            {
                format: {}
            }
        ]).concat(_h));
        this._P = this.bw._R ? '' : 'px';
        this._N = !_31 && this.bw.dom && !this.bw._R && !this.bw.ns4;
        this._15 = _15;
        this._2c = document.body && document.body.dir == 'rtl';
        this._S = -1;
        if (feba.domManipulator.isRTL()) {
            this._D = {
                _3r: '<a onmouseover="' + this._q('{0}', 'onmouseover', '{1}') + '" href="{2}" target="{3}" id="{4}" class="{5}">{6}</a>',
                _1I: '<img src="{0}" name="{1}" id="{1}" width="{2}" height="{3}" border="0"' + (this.bw.ns4 ? '' : ' style="display:block"') + ' />',
                _J: '<td style="font-size:1px{2}" width="{0}" valign="{3}">{1}</td>',
                _3b: '<table{0} cellpadding="' + this._2._3s + '" cellspacing="' + this._2._3D + '" border="0" class="cls' + this._e + '_10{1}"><tbody><tr>{2}{3}<td{4}><div id="{5}a" style="position:relative;">{6}</div></td></tr></tbody></table>',
                _3c: '<div onmouseover="' + this._q('layer', 'onmouseover', '{0}') + '" id="{1}d"  style="{2}right:-10000px;top:-10000px;position:absolute;{3}">{4}</div>'
            };
        } else {
            this._D = {
                _3r: '<a onmouseover="' + this._q('{0}', 'onmouseover', '{1}') + '" href="{2}" target="{3}" id="{4}" class="{5}">{6}</a>',
                _1I: '<img src="{0}" name="{1}" id="{1}" width="{2}" height="{3}" border="0"' + (this.bw.ns4 ? '' : ' style="display:block"') + ' />',
                _J: '<td style="font-size:1px{2}" width="{0}" valign="{3}">{1}</td>',
                _3b: '<table{0} cellpadding="' + this._2._3s + '" cellspacing="' + this._2._3D + '" border="0" class="cls' + this._e + '_10{1}"><tbody><tr>{2}{3}<td{4}><div id="{5}a" style="position:relative;">{6}</div></td></tr></tbody></table>',
                _3c: '<div onmouseover="' + this._q('layer', 'onmouseover', '{0}') + '" id="{1}d"  style="{2}left:-10000px;top:-10000px;position:absolute;{3}">{4}</div>'
            };
        }
        for (var i in this._D) this._D[i] = new _A(this._D[i])._37()
    };
    $ = _a.prototype;
    _a._1X = function() {
        if (!new _a._29().ns4)
            for (var i in window.CTrees) {
                window.CTrees[i]._1$ = true;
                window.CTrees[i].draw()
            }
    };
    $.$handleEvent = function(_k, _g, _K, _8, _l) {
        var _1 = this._3q(_K),
            _q = _k + '_' + _g;
        if (!_1) return false;
        if (!_1._1A[_k]) {
            this._1Y(_k, _8, this, _K);
            this._1Y(_k, _8, _1._1_(), _K);
            _1._1A[_k] = true
        };
        this._1Z(_q, _1._1_(), _1, _l);
        return this._1Z(_q, this, _1, _l)
    };
    $._1Y = function(_k, _8, _1t, _K) {
        for (var _q in _1t)
            if (_q.match(new RegExp('^' + _k + '_' + '(on.+)$'))) _8[RegExp.$1] = new Function(this._q(_k, RegExp.$1, _K))
    };
    $._1Z = function(_q, _1t, _3m, _l) {
        return _1t[_q] ? _1t[_q](_3m, _l) : false
    };
    $._q = function(_k, _l, _K) {
        return 'return ' + this.jsPath + '.$handleEvent(\'' + _k + '\',\'' + _l + '\',' + _K + ',this,window.event||arguments[0])'
    };
    $.getAdditionalColumns = function(_1) {
        return ''
    };
    $.getRoot = $._$ = function() {
        if (!this._13) {
            this._n._8 = this._13 = new _a._1y(this._n, this, null, false);
            this._13._Z(true)
        };
        return this._13
    };
    $._2J = function(_4) {
        var _t = this._1F('n', _4, this._n._3);
        if (!_t) return null;
        var _7 = this._n,
            i = 0;
        for (var i = 0; i < _t.length - 1; i++) _7 = _7._3[_t[i]];
        return [_7, _t[i]]
    };
    $._1b = function(_1) {
        if (_1 == this._13) this._13 = null;
        if (_1._8) {
            _1._8._1R();
            _1._r = null;
            _1._8 = null
        };
        for (var i = 0; i < _1._3.length; i++)
            if (_1._3[i]._8) this._1b(_1._3[i])
    };
    $._3n = function(_2K, _s, _5) {
        var _7;
        if (_2K == this._n._4) _7 = this._n;
        else {
            var _G = this._2J(_2K);
            if (_G) _7 = _G[0]._3[_G[1]]
        };
        if (_7) {
            this._1b(_7);
            for (var i = 0; i < _5.length; i++) _5[i] = this._1a(_5[i]);
            _s = Math.max(0, Math.min(_s, _7._3.length));
            if (_s == _7._3.length) _7._3 = _7._3.concat(_5);
            else {
                var _3 = _7._3;
                _7._3 = [];
                for (var i = 0; i < _3.length; i++) {
                    if (i == _s) _7._3 = _7._3.concat(_5);
                    _7._3[_7._3.length] = _3[i]
                }
            };
            this._u();
            return _s
        } else return null
    };
    $._2L = function(_4, _5, _3j, _3i, _1k) {
        if (_4 == this._$()._4) {
            this._$()._U();
            this._1b(this._$());
            var _5 = this._1a(_5);
            if (_1k) _5._3 = this._n._3;
            this._n = _5
        } else {
            var _G = this._2J(_4);
            if (_G) {
                var _7 = _G[0],
                    _3 = _7._3,
                    _4 = _G[1];
                this._1b(_7);
                var _5 = this._1a(_5);
                if (_3j) _5[0] = _7._3[_4][0];
                if (_3i) _5[4] = _7._3[_4][4];
                if (_1k) _5._3 = _7._3[_4]._3;
                _5.i = _5[0].id;
                _5.f = _5[4].format;
                _7._3[_4] = _5
            }
        }
    };
    $._3d = function(_7, _4) {
        if (!_i(_7._3[_4])) {
            if (_7._3[_4]._8) delete this._h[_7._3[_4]._8._4];
            this._1b(_7);
            _7._3.splice(_4, 1)
        }
    };
    $.getSelectedNode = function() {
        return this.nodeByIndex(this._1v)
    };
    $._3e = function(_1) {
        return this._1v === _1._4
    };
    $._1d = function() {
        return this._N && this._2._1p && this._2.exp
    };
    $._2p = function(_19) {
        for (var i in _19) {
            this._1J[_19[i].id] = _19[i];
            if (_19[i].layers) this._2p(_19[i].layers)
        }
    };
    $._1K = function(_p) {
        if (this.bw.ns4) {
            if (!this._1J) {
                this._1J = {};
                this._2p(document.layers)
            };
            return this._1J[_p]
        } else return (document.all && document.all[_p]) || document.getElementById(_p)
    };
    $.moveTo = function(x, y) {
        this._10._C = y;
        this._10._y = x;
        this._10._Q(x, y);
        this._2._C = y;
        this._2._y = x;
        this.draw()
    };
    $.ensureVisible = function(_4, _3a) {
        var _1 = this.nodeByIndex(_4);
        var _u = false;
        while (_1) {
            _1 = _1._r;
            if (_1._1r()) break;
            if (!_1._o()) {
                this.expandNode(_1._4, 1);
                _u = true
            }
        };
        if (_u && !_3a) this.draw()
    };
    $._1F = function(_17, _6, _h) {
        for (var i = 0; i < _h.length; i++) {
            switch (typeof(_6)) {
                case 'string':
                case 'number':
                    if (_h[i][_17] == _6) return [i];
                    break;
                default:
                    if (('' + _h[i][_17]).match(_6)) return [i]
            };
            var _2n = this._1F(_17, _6, _h[i]._3);
            if (_2n) return [i].concat(_2n)
        };
        return null
    };
    $._1s = function(_17, _6) {
        return this._$()._2l(this._1F(_17, _6, this._n._3))
    };
    $.nbn = $.nodeByName = function(_6) {
        return this._1s('c', _6)
    };
    $.nodeByID = function(_6) {
        return this._1s('i', _6)
    };
    $.nodeByURL = function(_6) {
        return this._1s('u', _6)
    };
    $.nodeByIndex = $._3q = function(_6) {
        if (!this._h[_6]) this._h[_6] = this._1s('n', _6);
        return this._h[_6]
    };
    $.nodeByXY = function(_X, _Y) {
        for (var i = 0; i < this._h.length; i++)
            if (this._h[i]) with(this._h[i]) if (visible && _m <= _X && _c <= _Y && _m + w > _X && _c + h > _Y) return this._h[i];
        return null
    };
    $._u = function(_c) {
        if (!this._2y) this._2y = window.setTimeout(this.jsPath + '.draw()', 1);
        if (typeof(_c) == 'number') this._S = Math.min(_c, this._S);
        else this._S = -1
    };
    $._1R = function(_1) {
        _1._1R()
    };
    $._U = function() {
        if (this._N)
            for (var _4 in this._1E) {
                var _1 = this.nodeByIndex(_4);
                if (_1) _1._U()
            };
        this._1E = {}
    };
    $.draw = function() {
        if (this.bw._14 || !this._1$) return;
        this._U();
        this._2w = true;
        this._M = 0;
        this._B = 0;
        with(this._$()) {
            draw(true);
            if (this._2c) draw(true)
        };
        if (!this._2.rel || this._2.resize) this._10._39(this._B, this._M);
        this._2y = null;
        this._S = 10000000;
        if (this.ondraw) this.ondraw(this);
        this._2w = false;
        this._2t()
    };
    $._2t = function() {
        with(this) _2u('Selected', _1v), _2u('State', _3x())
    };
    $.expandNode = function(_4, _3K, _1Q) {
        if (!this.bw._14) {
            var _1 = this.nodeByIndex(_4);
            if (_1Q) this.selectNode(_4);
            if (_1 && _1._2s()) {
                var _2O = !_1._o();
                if (this._2._3A) {
                    this.collapseAll(this._r);
                    this.ensureVisible(_1.index, true)
                };
                _1._Z(_2O);
                this._u(_1._c)
            }
        }
    };
    $._1Q = $.selectNode = function(_4) {
        this._1v = parseInt(_4);
        this._u()
    };
    $._2z = function(_d, _1) {
        for (var i = 0; i < _1._3.length; i++) {
            this._2z(_d, _1._3[i]);
            if (_1._3[i]._3.length)
                if (_1._3[i]._8) _1._3[i]._8._Z(_d);
                else _1._3[i][4].format.expanded = _d
        }
    };
    $._2x = function(_d, _1) {
        this._2z(_d, _1 || this._n);
        this._u()
    };
    $.collapseAll = function(_1) {
        this._2x(false, _1 && _1._5)
    };
    $.expandAll = function(_1) {
        this._2x(true, _1 && _1._5)
    };
    $._1a = function(_1) {
        if (_i(_1[_1.length - 1])) _1 = _1.slice(0, _1.length - 1);
        if (_i(_1[0].id)) _1 = ([{
            id: null
        }]).concat(_1);
        if (_i(_1[4]) || _i(_1[4].format)) _1 = _1.slice(0, 4).concat([{
            format: {}
        }]).concat(_1.slice(4));
        var _4 = this._3E++;
        var _3 = _1.slice(5);
        _1 = _1.slice(0, 5);
        _1._3 = [];
        for (var i = 0; i < _3.length; i++) _1._3[i] = this._1a(_3[i]);
        _1[4] = _2r(_1[4]);
        _1.i = _1[0].id;
        _1.c = _1[1];
        _1.u = _1[2];
        _1.t = _1[3];
        _1.f = _1[4].format;
        _1.n = _1._4 = _4;
        _1._8 = null;
        return _1
    };
    $.init = function() {
        var s = new _A;
        this._$()._2m(s, !this._N);
        if (this._2.cook) {
            this._1Q(this._2A('Selected'));
            this._2X(this._2A('State'))
        };
        if (!this.bw._14) this._10._38(s);
        if (this.bw.ns4) s._24('<div id="' + this._e + 'dummytreediv" style="position:absolute;"></div>');
        //Added for painting correct ajax response in case of page template
        var isCorpUser = "";
        if (document.getElementById('usertype') && document.getElementById('usertype') != null) {
            isCorpUser = document.getElementById('usertype').value;
        }
        if (isCorpUser == "2") {
            //jQuery(document.body).append(s._I());
            jQuery('.tree_Overflow').append(s._I());
        } else {
            document.write(s._I());
        }
        if (this.bw.ns4) {
            this._1$ = true;
            this.draw()
        } else {
            var isCorpUser = "";
            if (document.getElementById('usertype') && document.getElementById('usertype') != null) {
                isCorpUser = document.getElementById('usertype').value;
            }
            if (isCorpUser == "2") {
                this._1$ = true;
                this.draw()
            }
        }
    };
    $._2A = function(_e) {
        return document.cookie.match(new RegExp('(\\W|^)' + this._e + _e + '=([^;]+)')) ? RegExp.$2 : null
    };
    $._2u = function(_e, _6) {
        document.cookie = this._e + _e + '=' + _6 + '; path=/'
    };
    $._1W = function(_1) {
        var _9 = '';
        if (this._15) {
            for (var i = 0; i < _1._3.length; i++)
                if (_1._3[i]._3.length && !_1._3[i][4].format.noCookie && _1._3[i][4].format.expanded && _1._3[i][0].id) _9 += _1._3[i][0].id + ' ' + this._1W(_1._3[i])
        } else {
            for (var i = 0; i < _1._3.length; i++)
                if (_1._3[i]._3.length && !_1._3[i][4].format.noCookie) _9 += (_1._3[i][4].format.expanded ? 1 : 0) + this._1W(_1._3[i])
        };
        return _9
    };
    $._3x = function() {
        return this._1W(this._n)
    };
    $._1V = function(_1, _d, _4) {
        if (_d) {
            if (this._15) {
                for (var i = 0; i < _1._3.length; i++) {
                    if (_1._3[i]._3.length && !_1._3[i][4].format.noCookie) {
                        if (_1._3[i]._8) _1._3[i]._8._Z(_d[_1._3[i][0].id]);
                        else _1._3[i][4].format.expanded = _d[_1._3[i][0].id];
                        _4 = this._1V(_1._3[i], _d, _4 + 1)
                    }
                }
            } else {
                for (var i = 0; i < _1._3.length; i++) {
                    if (_1._3[i]._3.length && !_1._3[i][4].format.noCookie) {
                        if (_1._3[i]._8) _1._3[i]._8._Z(_d.charAt(_4) == '1');
                        else _1._3[i][4].format.expanded = _d.charAt(_4) == '1';
                        _4 = this._1V(_1._3[i], _d, _4 + 1)
                    }
                }
            }
        };
        return _4
    };
    $._2X = function(_d) {
        if (this._15) {
            var _2C = _d ? _d.split(' ') : [];
            _d = {};
            for (var i = 0; i < _2C.length; i++) _d[_2C[i]] = true
        };
        this._1V(this._n, _d || '', 0)
    };
    $.layer_onmousedown = function(_1, _l) {
        _1._2I = true;
        _1._12();
        _1._T();
        return true
    };
    $.layer_onmouseup = $.layer_onclick = function(_1, _l) {
        _1._2I = false;
        _1._12();
        _1._T();
        return true
    };
    $.layer_onmouseover = function(_1, _l) {
        _1._1G = true;
        _1._12();
        _1._T();
        return true
    };
    $.layer_onmouseout = function(_1, _l) {
        _1._1G = false;
        _1._12();
        _1._T();
        return true
    };
    $.image_onclick = $.caption_onclick = function(_1, _l) {
        this.expandNode(_1.index, 1, 1);
        return true
    };
    $.button_onclick = function(_1, _l) {
        this.expandNode(_1.index);
        return true
    };
    $.image_onmouseover = $.button_onmouseover = $.caption_onmouseover = function(_1, _l) {
        window.status = _1.text;
        return true
    };
    $.image_onmouseout = $.button_onmouseout = $.caption_onmouseout = function(node, _l) {
        window.status = window.defaultStatus;
        return true
    };
    _a._1y = function(_5, _, _7, _w) {
        var _4 = _5._4;
        this._5 = _5;
        this._4 = this.index = _4;
        this.jsPath = _.jsPath + '.nodeByIndex(' + _4 + ')';
        this.treeView = this._ = _;
        this._r = this.parentNode = _7;
        this._w = _w;
        this.text = _5[1];
        this.url = _5[2];
        this.target = _5[3];
        this._3L = null;
        this._1A = {};
        this.nodeID = _5[0].id;
        this._2 = _5[4].format;
        this._1q = null;
        this._Z(this._5[4].format.expanded);
        this.children = this._3 = [];
        this._E = this.level = _7 ? _7._E + 1 : -1;
        this.visible = false;
        this._z = {};
        this._O = false;
        this._1C = {};
        if (_7) this._2T()
    };
    $ = _a._1y.prototype;
    $._1r = function() {
        return this._._n._4 == this._4
    };
    $._o = function() {
        return this._5[4].format.expanded
    };
    $.id = function() {
        return this._p
    };
    $._1H = function(_2H, _1g, _2v) {
        this._._2L(this._4, [_i(_2H) ? this._3v() : _2H, _i(_1g) ? this._3C() : _1g, _i(_2v) ? this._3G() : _2v], true, true, true);
        this._._u()
    };
    $.getTree = function() {
        return this._
    };
    $.getParent = function() {
        return this._r
    };
    $.getId = function() {
        return this._5[0].id
    };
    $._3v = $.getCaption = function() {
        return this._5[1]
    };
    $._3C = $.getUrl = function() {
        return this._5[2]
    };
    $._3G = $.getTarget = function() {
        return this._5[3]
    };
    $._1_ = $.getFormat = function() {
        return this._5[4].format
    };
    $.setCaption = function(_6) {
        this._1H(_6, this._1e, this._1e)
    };
    $.setUrl = function(_6) {
        this._1H(this._1e, _6, this._1e)
    };
    $.setTarget = function(_6) {
        this._1H(this._1e, this._1e, _6)
    };
    $.hasChildren = $._H = function() {
        return !!this._5._3.length
    };
    $._2s = function() {
        return this._H() || this._5[4].format.isFolder
    };
    $._2l = function(_t) {
        if (_t) return _t.length ? this._1D(_t[0])._2l(_t.slice(1)) : this;
        return null
    };
    $._Z = function(_6) {
        this.expanded = this._5[4].format.expanded = !!_6;
        this._12()
    };
    $._2q = function() {
        if (this._._2._1c.nb && !this._2.nobuttons && this._H())
            if (this._._2.exp) return this._1o(this._._2.expimg, this._2.eimages, this._o() ? (this._w ? 3 : 4) : (this._w ? 5 : 6));
            else return this._1o(this._._2._3h, this._2.buttons, this._o() ? 1 : 0);
        return null
    };
    $._2k = function() {
        if (this._._2._1c.nf && !this._2.nofolders) {
            var _4 = this._2s() ? (this._o() ? 1 : 0) : 2;
            if (this._._2.exp) return this._1o(this._._2.expimg, this._2.eimages, _4);
            else return this._1o(this._._2._3z, this._2.folders, _4)
        };
        return null
    };
    $._1o = function(_2B, _2E, _4) {
        var _j = (_2E && _2E[_4]) || (_2B && _2B[_4]) || this._._2._1u;
        if (typeof _j != 'string' && _j[0]) {
            if (this._2I && this._1G && _j[2]) _j = _j[2];
            else if (this._1G && _j[1]) _j = _j[1];
            else _j = _j[0]
        };
        return _j
    };
    $._12 = function() {
        if (this._1h) {
            this._2D('nb', this._2q());
            this._2D('nf', this._2k())
        }
    };
    $._2D = function(_g, _j) {
        if (_j) {
            var _1N = (this._f().document || document).images[this._p + _g];
            if ((this._._2._1c[_g] || this._._2.exp) && _1N && _1N.src != _j) this._1C[_g] = {
                _1I: _1N,
                _t: _j
            }
        }
    };
    $._2T = function() {
        if (this._._2.exp) {
            var esz = this._._2.expimgsize;
            this.wimg = this._1w = this._1n = esz[0];
            this.himg = this._1j = this._1l = esz[1]
        } else {
            this._1n = _i(this._2.bsize) ? this._._2._1n : this._2.bsize[0];
            this._1l = _i(this._2.bsize) ? this._._2._1l : this._2.bsize[1];
            this._1w = _i(this._2.fsize) ? this._._2._1w : this._2.fsize[0];
            this._1j = _i(this._2.fsize) ? this._._2._1j : this._2.fsize[1]
        }
    };
    $._2m = function(_b, _1z) {
        this._p = 'nt' + this._._e + '_' + this._._3F++;
        if (!this._1r())
            if (this._.bw._14) _b._18(this._1M());
            else _b._16(this._._D._3c, [this._4, this._p, this._.bw.mac || this._.bw._R ? '' : 'height:1px;width:1px;', this._._N ? '' : 'visibility:hidden;', this._1M()]);
        if (_1z) this._2F(_b, _1z);
        return _b
    };
    $._2F = function(_b, _1z) {
        for (var i = 0; i < this._1L(); i++) this._1D(i)._2m(_b, _1z);
        return _b
    };
    $._2G = function(_1g, _k, _3w, __, _3l) {
        return new _A()._16(this._._D._3r, [_k, this._4, _1g || 'javascript:void(0)', _1g && this.target || '', _3l && (this._p + 'an') || '', __ || '', _3w])._I()
    };
    $._3k = function(_1P, _e, _1U, _1O) {
        return new _A()._16(this._._D._1I, arguments)._I()
    };
    $._J = function(_k, _g, _1P, _3p, _3o, w, h, _2j) {
        if (!w || !_1P) return '';
        var _21 = this._3k(_1P, _g && this._p + _g || '', w, h);
        return new _A()._16(this._._D._J, [w, _3p ? this._2G(_3o && this.url, _k, _21) : _21, _2j ? ';background-image:url(' + _2j + ')' : '', this._._2.exp ? 'top' : this._._2._3B])._I()
    };
    $._2d = function() {
        return this._E >= 0 ? this._r._2d() + this._J('', '', this._._2._1u, false, false, this._._2.expimgsize[0], this._._2.expimgsize[1], this._w && this._._2.expimg[7]) : ''
    };
    $._3g = function() {
        with(this._._2) return _i(_1S[this._E]) ? _1S[0] * this._E : _1S[this._E]
    };
    $._1M = function() {
        this._1m = this._2b();
        var _3f = [this._._2._1p ? ' width="' + this._._2._1p + '"' : '', this._E, this._._2.exp ? this._r._2d() + (this._H() ? '' : this._J('', '', (this._w ? this._._2.expimg[8] : this._._2.expimg[9]), false, false, this._._2.expimgsize[0], this._._2.expimgsize[1], this._w && this._._2.exp && this._._2.expimg[7])) : this._J('', '', this._._2._1u, false, false, this._3g() + (this._H() ? 0 : this._._2._3y), 1), this._J('button', 'nb', this._2q(), true, false, this._1n, this._1l, this._w && this._._2.exp && this._._2.expimg[7]) + this._J('image', 'nf', this._2k(), true, true, this._1w, this._1j, this._o() && this._H() && this._._2.exp && this._._2.expimg[7]), this._._2._1p ? '' : ' nowrap="nowrap"', this._p, this._2G(this.url, 'caption', this.text, this._1m, true)];
        return new _A()._16(this._._D._3b, _3f)._I()
    };
    $._2b = function() {
        var _9;
        if (this._._2.sel)
            if (this._1i()) _9 = this._._2._3I;
            else if (this._H() && this._o()) _9 = this._._2._3H;
        if (!_9) with(this._._2) _9 = _3t[this._E] || __;
        if (typeof(_9) != 'string') _9 = _9[this._E];
        return _9 || ''
    };
    $._3u = function() {
        return this._._2.sel ? this._._2.selC[this._1i() ? 1 : 0] : ''
    };
    $._2M = function(_m, _c) {
        if (this._m != _m || this._c != _c) {
            this._m = _m;
            this._c = _c;
            with(this._f()) moveTo(_m, _c)
        }
    };
    $._2W = function(_m, _c) {
        if (this._m != _m || this._c != _c) {
            this._m = _m;
            this._c = _c;
            with(this._f().style) {
                if (feba.domManipulator.isRTL()) {
                    right = _m + this._._P;
                } else {
                    left = _m + this._._P;
                }
                top = _c + this._._P
            }
        }
    };
    $._Q = null;
    $._2e = function() {
        if (!this._W) {
            var o;
            if (this._._N) {
                o = document.createElement('div');
                o.style.position = 'absolute';
                o.style.top = 0;
                if (feba.domManipulator.isRTL()) {
                    o.style.right = 0;
                } else {
                    o.style.left = 0;
                }
                o.innerHTML = this._2F(new _A)._I();
                this._._10._f().appendChild(o)
            } else {
                o = this._f('ch')
            };
            this._W = o
        };
        return this._W
    };

    function _2f(_1f) {
        _1f.parentNode.removeChild(_1f)
    };
    $._2h = function() {
        if (this._W) {
            var _32 = this._W;
            this._W = null;
            for (var i = 0; i < this._5._3.length; i++) with(this._5._3[i]) if (_8) _8._U();
            _2f(_32)
        }
    };
    $._1R = function() {
        if (this._._2w) this._U();
        else {
            this._._1E[this._4] = true;
            this._._u()
        }
    };
    $._2V = function() {
        this._f().innerHTML = this._1M();
        this._1A = {}
    };
    $._U = function() {
        if (this._1h) {
            for (var i in this._z) {
                _2f(this._z[i]);
                this._z[i] = null
            };
            this._z = {};
            this.w = this.h = 0;
            this._m = this._c = -1;
            this._1h = false
        };
        this._1A = {};
        this._2h();
        if (!this._1r()) this._r._2h()
    };
    $._2g = function(_1f, _6) {
        if (this._.bw.ns4) _1f.visibility = _6 ? 'show' : 'hide';
        else _1f.style.visibility = _6 ? 'visible' : 'hidden'
    };
    $._T = function() {
        if (!this._._N) this._2g(this._f(), this.visible);
        if (this.visible) {
            for (var i in this._1C) with(this._1C[i]) _1I.src = _t;
            this._1C = {}
        }
    };
    $._2a = function() {
        if (!this.visible) this._Q(-10000, -10000);
        else this._Q(this._._2c ? (this._.bw.gecko ? this._._B : 0) - this.w : 0, this._._1B)
    };
    $._2$ = function() {
        if (this._._2.sel) {
            if (this._1i() == !this._2S) {
                var _23 = this._3u();
                with(this._f('a')) if (this._.bw.ns4) bgColor = _23;
                    else style.backgroundColor = _23;
                this._2S = this._1i()
            };
            if (this._.bw.dom) {
                if (_i(this._2Y)) this._1m = this._2Y = this._._1K(this._p + 'an').className;
                var __ = this._2b();
                if (__ != this._1m) {
                    this._f('an').className = this._1m = __;
                    this.h = 0
                }
            }
        }
    };
    $._36 = function(_v) {
        if (!this.h || _v) {
            with(this._f().childNodes[0]) {
                this.w = offsetWidth;
                this.h = offsetHeight
            };
            if (this._._1d()) this._O = this._._2.exp && this.h > this._._2.expimgsize[1]
        }
    };
    $._34 = function(_v) {
        if (!this.h || _v) {
            with(this._f()) {
                this.w = clip.width;
                this.h = clip.height
            };
            if (this._._1d()) this._O = this._._2.exp && this.h > this._._2.expimgsize[1]
        }
    };
    $._2Z = function(_v) {
        if (!this.h || _v) {
            with(this._f().childNodes[0]) {
                this.w = offsetWidth;
                this.h = offsetHeight
            };
            if (this._._1d()) this._O = this._._2.exp && this.h > this._._2.expimgsize[1]
        }
    };
    $._2P = function(_v) {
        if (!this.h || _v) {
            with(this._f()) {
                this.w = style.pixelWidth;
                this.h = style.pixelHeight
            };
            if (this._._1d()) this._O = this._._2.exp && this.h > this._._2.expimgsize[1]
        }
    };
    $._2Q = function(_v) {
        if (!this.h || _v) {
            with(this._f()) {
                this.w = scrollWidth || offsetWidth;
                this.h = scrollHeight || offsetHeight
            };
            if (this._._1d()) this._O = this._._2.exp && this.h > this._._2.expimgsize[1]
        }
    };
    $._F = function() {};
    $.draw = function(_11) {
        var _2N = this.visible != _11;
        var _22 = this._1h;
        var _3P = this._O;
        if (this._1r()) {
            this._._1B = 0;
            this.visible = _11
        } else if (this._c < this._._S) {
            this._._1B = this._c + this.h;
            this._._B = this._B;
            this._._M = this._M
        } else if (this.visible || _11) {
            this._._S = -1;
            this.visible = _11;
            this._T();
            if (this.visible) {
                if (_22 || this._1i()) this._2$();
                this._F();
                this._2a();
                if (this._O && this._1q != this._o() && _22) {
                    this._2V();
                    this._F();
                    this._2a();
                    this._T()
                };
                this._._B = Math.max(this.w, this._._B);
                this._._1B += this.h;
                this._._M = Math.max(this._._1B, this._._M);
                this._B = this._._B;
                this._M = this._._M
            }
        };
        if ((this.visible && (this._1q || this._o())) || (!this.visible && _2N && this._1q)) this._2U(this._o() && this.visible);
        if (this._._N && this._H() && (this._W || (this._o() && this.visible))) this._2g(this._2e(), this._o() && this.visible);
        this._1q = this._o()
    };
    $._2U = function(_11) {
        for (var i = 0; i < this._1L(); i++) this._1D(i).draw(_11)
    };
    $._1i = function() {
        return this._._3e(this)
    };
    $.getNumberOfChildren = $._1L = function() {
        return this._5._3.length
    };
    $.getChild = $._1D = function(_s) {
        with(this._5._3[_s]) {
            if (!_8) {
                var _V = this._5._3[_s];
                _8 = this._._h[_V._4] = new _a._1y(_V, this._, this, _s < this._1L() - 1)
            };
            return _8
        }
    };
    $.getMinorIndex = $._3N = function() {
        var _9 = 0;
        while (_9 < this._r._5._3.length)
            if (this._r._5._3[_9]._4 == this._4) return _9;
            else _9++;
        return null
    };
    $.addNode = function(_s, _V) {
        return this._._3n(this._4, _s, [_V])
    };
    $.recreate = function(_V, _1k) {
        this._._2L(this._4, _V, false, false, _1k);
        this._._u()
    };
    $.deleteNode = function(_4) {
        this._._3d(this._5, _4)
    };
    $.getLayer = $._f = function(_g) {
        if (!_g) _g = 'd';
        if (!this._z[_g]) {
            if (!this._1h) {
                if (this._r) this._r._2e();
                this._1h = true;
                this._z = {}
            };
            this._z[_g] = this._._1K(this._p + _g)
        };
        return this._z[_g]
    };
    _a._20 = function(_33, _) {
        this._ = _;
        this._y = _._2._y;
        this._C = _._2._C;
        this._e = 'cls' + _._e + '_10';
        this.color = _33
    };
    $ = _a._20.prototype;
    $._f = function(_g) {
        return this._._1K(this._e + (_g || ''))
    };
    $._39 = function(_1U, _1O) {
        if (this._.bw._R && !this._30) this._30 = true;
        else {
            with(this._f()) if (this._.bw.ns4) resizeTo(_1U, _1O);
                else {
                    style.width = _1U + this._._P;
                    style.height = _1O + this._._P
                }
        }
    };
    $._Q = function(_y, _C) {
        with(this._f()) if (this._.bw.ns4) moveTo(_y, _C);
            else {
                if (feba.domManipulator.isRTL()) {
                    style.right = _y + this._._P;
                } else {
                    style.left = _y + this._._P;
                }
                style.top = _C + this._._P
            }
    };
    $._38 = function(_b) {
        var p = 'relative',
            w = 1,
            h = 1;
        if (this._._2.rel) {
            w = this._._2.rels[0];
            h = this._._2.rels[1]
        } else p = 'absolute';
        if (feba.domManipulator.isRTL()) {
            return _b._24('<div style="overflow:' + (this._._R ? 'scroll' : 'hidden') + ';' + (this.color == "" ? "" : (this._.bw.ns4 ? 'layer-' : '') + 'background-color:' + this.color + ";") + 'position:' + p + ';top:' + this._C + 'px;right:' + this._y + 'px;width:' + w + 'px;height:' + h + 'px;z-index:0;" id="' + this._e + '">' + (this._.bw.ns4 ? '<img src="' + this._._2._1u + '" width="' + w + '" height="' + h + '" />' : ''))._18('</div>')
        } else {
            return _b._24('<div style="overflow:' + (this._._R ? 'scroll' : 'hidden') + ';' + (this.color == "" ? "" : (this._.bw.ns4 ? 'layer-' : '') + 'background-color:' + this.color + ";") + 'position:' + p + ';top:' + this._C + 'px;left:' + this._y + 'px;width:' + w + 'px;height:' + h + 'px;z-index:0;" id="' + this._e + '">' + (this._.bw.ns4 ? '<img src="' + this._._2._1u + '" width="' + w + '" height="' + h + '" />' : ''))._18('</div>')
        }
    };
    _a._29 = function() {
        var _35 = parseInt(navigator.appVersion);
        this.ver = navigator.appVersion;
        this.agent = navigator.userAgent;
        this.dom = document.getElementById ? 1 : 0;
        this.opera = window.opera ? 1 : 0;
        this.ie5 = this.ver.match(/MSIE 5/) && this.dom && !this.opera;
        this.ie6 = this.ver.match(/MSIE 6/) && this.dom && !this.opera;
        this.ie4 = document.all && !this.dom && !this.opera;
        this.ie = this.ie4 || this.ie5 || this.ie6;
        this.mac = this.agent.match(/Mac/);
        this.ie3 = this.ver.match(/MSIE/) && _35 < 4;
        this.hotjava = this.agent.match(/hotjava/i);
        this.ns4 = document.layers && !this.dom && !this.hotjava;
        this._14 = this.hotjava || this.ie3;
        this.operaNew = this.agent.match(/opera.[789]/i);
        this.gecko = this.agent.match(/gecko/i);
        this.oldGecko = this.agent.match(/gecko\/2002/i);
        this._R = this.opera && !this.operaNew
    };

    function _2i(_28) {
        for (var i = 0; i < _28.length; i++)(new Image()).src = _28[i]
    };
    _a._27 = window.onload;
    _a._26 = window.onunload;
    window.onload = function() {
        _a._1X();
        return !_2o(_a._27) || _a._27()
    };
    window.onunload = function() {
        if (window.oldonunload != null) window.oldonunload();
        for (var i in window.CTrees) with(window.CTrees[i]) if (_2.cook) _2t();
        return !_2o(_a._26) || _a._26()
    };

    function _2r(o) {
        var r = {};
        for (var i in o) r[i] = typeof(o[i]) == 'object' && o[i] !== null ? _2r(o[i]) : o[i];
        return r
    };
    window.COOLjsTreePRO = _a;
    window.RedrawAllTrees = function() {
        _a._1X()
    }
})()