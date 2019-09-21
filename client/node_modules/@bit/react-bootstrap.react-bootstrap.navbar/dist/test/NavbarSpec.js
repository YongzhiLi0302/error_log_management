"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Nav = _interopRequireDefault(require("../src/Nav"));

var _Navbar = _interopRequireDefault(require("../src/Navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Navbar>', function () {
  it('Should create nav element', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null)).assertSingle('nav.navbar.navbar-light');
  });
  it('Should add "navigation" role when not using a `<nav>`', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      as: "div"
    })).assertSingle('Navbar > div[role="navigation"]');
  });
  it('Should add fixed=top|bottom variation', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      fixed: "top"
    })).assertSingle('nav.fixed-top');
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      fixed: "bottom"
    })).assertSingle('nav.fixed-bottom');
  });
  it('Should variant=dark', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      variant: "dark"
    })).assertSingle('.navbar-dark');
  });
  it('Should override role attribute', function () {
    assert.ok((0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      role: "banner"
    })).getDOMNode().getAttribute('role'), 'banner');
  });
  describe('Brand', function () {
    it('Should render brand', function () {
      (0, _enzyme.mount)(_react.default.createElement(_Navbar.default.Brand, null)).assertSingle('span.navbar-brand');
    });
    it('Should render brand as anchor', function () {
      (0, _enzyme.mount)(_react.default.createElement(_Navbar.default.Brand, {
        href: "#"
      })).assertSingle('a.navbar-brand');
    });
  });
  it('Should pass navbar context to navs', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null, _react.default.createElement(_Nav.default, null))).assertSingle('div.navbar-nav');
  });
  it('Should add custom toggle', function () {
    assert((0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null, _react.default.createElement(_Navbar.default.Toggle, {
      as: "p"
    }, "hi"))).assertSingle('p.navbar-toggler').text().should.equal('hi'));
  });
  it('Should trigger onToggle', function () {
    var toggleSpy = sinon.spy();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      onToggle: toggleSpy
    }, _react.default.createElement(_Navbar.default.Toggle, null))).find('NavbarToggle').simulate('click');
    expect(toggleSpy).to.be.calledOnce;
    expect(toggleSpy).to.be.calledWith(true);
  });
  it('Should not swallow onClick', function () {
    var clickSpy = sinon.spy();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null, _react.default.createElement(_Navbar.default.Toggle, {
      onClick: clickSpy
    }))).find('NavbarToggle').simulate('click');
    expect(clickSpy).to.have.been.called;
  });
  it('Should render collapse', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null, _react.default.createElement(_Navbar.default.Collapse, null, "hello"))).assertSingle('.navbar-collapse');
  });
  it('Should pass expanded to Collapse', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      defaultExpanded: true
    }, _react.default.createElement(_Navbar.default.Collapse, null, "hello"))).assertSingle('Collapse[in]');
  });
  it('Should wire the toggle to the collapse', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, null, _react.default.createElement(_Navbar.default.Toggle, null), _react.default.createElement(_Navbar.default.Collapse, null, "hello")));
    var toggle = wrapper.find('.navbar-toggler');
    var collapse = wrapper.find('Collapse');
    expect(collapse.is('[in=false]')).to.equal(true);
    expect(toggle.hasClass('collapsed')).to.equal(false);
    toggle.simulate('click');
    toggle = wrapper.find('.navbar-toggler');
    collapse = wrapper.find('Collapse');
    expect(collapse.is('[in=true]')).to.equal(true);
    expect(toggle.hasClass('collapsed')).to.equal(true);
  });
  it('Should open external href link in collapseOnSelect', function () {
    var selectSpy = sinon.spy();
    var navItemOnClick = sinon.stub();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      onSelect: selectSpy
    }, _react.default.createElement(_Navbar.default.Toggle, null), _react.default.createElement(_Navbar.default.Collapse, null, _react.default.createElement(_Nav.default, {
      as: "div"
    }, _react.default.createElement(_Nav.default.Link, {
      href: "https://www.google.com",
      onClick: navItemOnClick
    }))))).find('a.nav-link').simulate('click');
    var event = navItemOnClick.getCall(0).args[0];
    var preventDefaultSpy = sinon.spy(event.preventDefault);
    expect(selectSpy).to.be.calledOnce;
    expect(navItemOnClick).to.be.calledOnce;
    expect(event.target.getAttribute('href')).to.be.equal('https://www.google.com');
    expect(preventDefaultSpy).to.not.be.called;
  });
  it('Should fire external href click', function () {
    var navItemSpy = sinon.spy();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      defaultExpanded: true
    }, _react.default.createElement(_Navbar.default.Toggle, null), _react.default.createElement(_Navbar.default.Collapse, null, _react.default.createElement(_Nav.default, {
      as: "div"
    }, _react.default.createElement(_Nav.default.Link, {
      href: "https://www.google.com",
      onClick: navItemSpy
    }, _react.default.createElement("span", {
      className: "link-text"
    }, "Option 1")))))).find('.link-text').simulate('click');
    expect(navItemSpy.getCall(0).args[0].isDefaultPrevented()).to.be.false;
  });
  it('Should collapseOnSelect & fire Nav subcomponent onSelect event if expanded', function () {
    var toggleSpy = sinon.spy();
    var navItemSpy = sinon.spy();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      collapseOnSelect: true,
      onToggle: toggleSpy,
      defaultExpanded: true
    }, _react.default.createElement(_Navbar.default.Toggle, null), _react.default.createElement(_Navbar.default.Collapse, null, _react.default.createElement(_Nav.default, {
      as: "div"
    }, _react.default.createElement(_Nav.default.Link, {
      href: "#",
      onClick: navItemSpy
    }, _react.default.createElement("span", {
      className: "link-text"
    }, "Option 1")))))).find('.link-text').simulate('click');
    expect(navItemSpy).to.be.calledOnce;
    expect(toggleSpy).to.be.calledOnce;
    expect(toggleSpy).to.be.calledWith(false);
  });
  it('Should fire onSelect with eventKey for nav children', function () {
    var selectSpy = sinon.spy();
    var navItemSpy = sinon.spy();
    (0, _enzyme.mount)(_react.default.createElement(_Navbar.default, {
      onSelect: selectSpy
    }, _react.default.createElement(_Navbar.default.Toggle, null), _react.default.createElement(_Navbar.default.Collapse, null, _react.default.createElement(_Nav.default, {
      as: "div"
    }, _react.default.createElement(_Nav.default.Link, {
      href: "#home",
      onClick: navItemSpy
    }, _react.default.createElement("span", {
      className: "link-text"
    }, "Option 1")))))).find('.link-text').simulate('click');
    expect(navItemSpy).to.be.calledOnce;
    expect(selectSpy).to.be.calledOnce;
    expect(selectSpy).to.be.calledWith('#home');
  });
});

//# sourceMappingURL=NavbarSpec.js.map