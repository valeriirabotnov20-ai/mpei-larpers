// mpei_larpers: мобильное меню, карточки игроков в составе, последний пост блога на главной
(function () {

  /* ---------------- мобильное меню ---------------- */
  var nav = document.querySelector('.header__nav');
  var toggle = document.querySelector('[data-menu-toggle]');

  function setOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }

  if (nav && toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  /* ---------------- состав: клик по нику раскрывает карточку ---------------- */
  var list = document.querySelector('[data-roster]');
  var players = list ? Array.prototype.slice.call(list.querySelectorAll('.team-player')) : [];

  function headOf(p) { return p.querySelector('[data-player-head]'); }
  function isActive(p) { return p.classList.contains('team-player_active'); }

  function collapse(p) {
    p.classList.remove('team-player_active');
    var h = headOf(p);
    if (h) h.setAttribute('aria-expanded', 'false');
  }

  function collapseAll(keepUrl) {
    players.forEach(collapse);
    if (!keepUrl && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  function expand(p) {
    players.forEach(function (o) { if (o !== p) collapse(o); });
    p.classList.add('team-player_active');
    var h = headOf(p);
    if (h) h.setAttribute('aria-expanded', 'true');
    var slug = (p.id || '').replace('player-', '');
    if (slug && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + slug);
    }
  }

  players.forEach(function (p) {
    var h = headOf(p);
    if (h) {
      h.addEventListener('click', function () {
        if (isActive(p)) { collapseAll(); } else { expand(p); }
      });
      h.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h.click(); }
      });
    }

    var back = p.querySelector('[data-player-close]');
    if (back) {
      back.addEventListener('click', function (e) { e.preventDefault(); collapseAll(); });
      back.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); collapseAll(); }
      });
    }
  });

  // ссылка вида team.html#lavbarr сразу открывает нужную карточку
  var hash = (window.location.hash || '').replace('#', '');
  if (hash && players.length) {
    var target = players.filter(function (p) { return p.id === 'player-' + hash; })[0];
    if (target) expand(target);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (nav && nav.classList.contains('is-open')) { setOpen(false); return; }
    if (players.some(isActive)) collapseAll();
  });
})();
