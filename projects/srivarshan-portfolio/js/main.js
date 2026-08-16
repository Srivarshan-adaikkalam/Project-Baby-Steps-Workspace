/**
 * Srivarshan Developer Portfolio - Main JavaScript Engine
 * Warm Cream Luxury Edition
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initScrollytellingObserver();
  initMagneticAndRippleButtons();
  init3DTiltEffect();
  initProjectFilters();
  initDispatchButtons();
  initStandalonePortfolioChronoPicker();
  initGlobalPopoverClose();
  initModalControllers();
});

/* --------------------------------------------------------------------------
 * 1. Top Scroll Progress Indicator Bar
 * -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
}

/* --------------------------------------------------------------------------
 * 2. CAREER JOURNEY SCROLLYTELLING OBSERVER ENGINE
 * -------------------------------------------------------------------------- */
function initScrollytellingObserver() {
  const stepCards = document.querySelectorAll('.scrolly-step-card');
  const statusBadge = document.getElementById('scrolly-status-badge');
  const velocityText = document.getElementById('scrolly-velocity');
  const progressFill = document.getElementById('scrolly-progress-fill');

  if (!stepCards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stepCards.forEach(c => c.classList.remove('active'));
        entry.target.classList.add('active');

        const step = entry.target.getAttribute('data-step');
        updateTimelineTelemetry(step);
      }
    });
  }, { threshold: 0.6 });

  stepCards.forEach(card => observer.observe(card));

  function updateTimelineTelemetry(step) {
    if (step === '1') {
      if (statusBadge) statusBadge.textContent = 'ACTIVE: AGENTIC SYSTEMS ARCHITECTURE';
      if (velocityText) velocityText.textContent = '99.4%';
      if (progressFill) progressFill.style.width = '95%';
    } else if (step === '2') {
      if (statusBadge) statusBadge.textContent = 'ACTIVE: LUXURY AUTOMOTIVE ENGINEERING';
      if (velocityText) velocityText.textContent = '96.8%';
      if (progressFill) progressFill.style.width = '85%';
    } else if (step === '3') {
      if (statusBadge) statusBadge.textContent = 'ACTIVE: WEBGL & VANILLA ENGINE FOUNDATION';
      if (velocityText) velocityText.textContent = '92.1%';
      if (progressFill) progressFill.style.width = '75%';
    }
  }
}

/* --------------------------------------------------------------------------
 * 3. Button Micro-Interactions: Magnetic Pull & Tactile Click Ripple
 * -------------------------------------------------------------------------- */
function initMagneticAndRippleButtons() {
  const buttons = document.querySelectorAll('.btn, .filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      if (btn.classList.contains('is-dispatching')) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12 - 2}px) scale(1.02)`;
    });

    btn.addEventListener('mouseleave', () => {
      if (btn.classList.contains('is-dispatching')) return;
      btn.style.transform = '';
    });

    btn.addEventListener('click', function(e) {
      if (btn.classList.contains('is-dispatching')) return;
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) existingRipple.remove();

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* --------------------------------------------------------------------------
 * 4. 3D Card Tilt Effect on Hover
 * -------------------------------------------------------------------------- */
function init3DTiltEffect() {
  const tiltCards = document.querySelectorAll('.hero-profile-card, .project-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* --------------------------------------------------------------------------
 * 5. Project Showcase Category Filtering
 * -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * 6. TRANSPORTER DISPATCH BUTTON ENGINE
 * -------------------------------------------------------------------------- */
function setupDispatchButton(button, successText = 'Request Dispatched!') {
  if (button.getAttribute('data-dispatch-setup')) return;
  button.setAttribute('data-dispatch-setup', 'true');
  button.classList.add('btn-dispatch');

  const originalContent = button.innerHTML;
  button.innerHTML = `
    <span class="btn-label">${originalContent}</span>
    <div class="dispatch-overlay">
      <div class="road-lines"></div>
      <div class="dispatch-truck">
        <svg class="truck-svg" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="60" height="26" rx="4" fill="#C85A32" stroke="#FFFFFF" stroke-width="2"/>
          <path d="M65 18H85L95 28V36H65V18Z" fill="#E0683C" stroke="#FFFFFF" stroke-width="2"/>
          <rect x="70" y="20" width="12" height="8" rx="2" fill="#1F1D1B" stroke="#EAE3D2" stroke-width="1"/>
          <circle cx="20" cy="38" r="7" fill="#1F1D1B" stroke="#FFFFFF" stroke-width="2"/>
          <circle cx="50" cy="38" r="7" fill="#1F1D1B" stroke="#FFFFFF" stroke-width="2"/>
          <circle cx="80" cy="38" r="7" fill="#1F1D1B" stroke="#FFFFFF" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <span class="success-label">
      <span class="material-symbols-outlined">local_shipping</span>
      ${successText}
    </span>
  `;
}

function runDispatchAnimation(button, callback) {
  if (button.classList.contains('is-dispatching')) return;

  button.classList.remove('is-dispatched');
  button.classList.add('is-dispatching');

  setTimeout(() => {
    button.classList.remove('is-dispatching');
    button.classList.add('is-dispatched');

    if (typeof callback === 'function') {
      setTimeout(callback, 700);
    }
  }, 1500);
}

function initDispatchButtons() {
  const dispatchButtons = document.querySelectorAll('.btn-dispatch-trigger');

  dispatchButtons.forEach(btn => {
    setupDispatchButton(btn, btn.getAttribute('data-success-text') || 'Inquiry Dispatched!');

    btn.addEventListener('click', (e) => {
      const form = btn.closest('form');
      if (form) {
        if (!form.checkValidity()) return;
        e.preventDefault();
      }

      runDispatchAnimation(btn, () => {
        if (btn.getAttribute('data-action') === 'portfolio-submit') {
          alert('Consultation Inquiry Dispatched! Srivarshan will get back to you shortly.');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * 7. APEX CHRONO TELEMETRY POPOVER DATE & TIME PICKER
 * -------------------------------------------------------------------------- */
function buildChronoPopoverHTML(targetInputId, labelText = 'August 24, 2026 @ 02:00 PM') {
  return `
    <div class="chrono-popover-wrapper" id="popover-wrapper-${targetInputId}">
      <input type="hidden" id="${targetInputId}" name="consultation_slot" value="${labelText}" />
      
      <div class="chrono-popover-trigger" id="popover-trigger-${targetInputId}">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="material-symbols-outlined" style="color: var(--terracotta);">calendar_month</span>
          <span class="popover-trigger-text">${labelText}</span>
        </div>
        <span class="material-symbols-outlined" style="color: var(--text-muted); font-size: 20px;">expand_more</span>
      </div>

      <div class="chrono-popover-dropdown">
        <div class="chrono-picker-container">
          <div class="chrono-header">
            <button type="button" class="chrono-nav-btn chrono-prev">
              <span class="material-symbols-outlined" style="font-size: 18px;">chevron_left</span>
            </button>
            <div class="chrono-month-title">August 2026</div>
            <button type="button" class="chrono-nav-btn chrono-next">
              <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
            </button>
          </div>

          <div class="chrono-days-header">
            <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
          </div>

          <div class="chrono-date-grid">
            <div class="chrono-day-cell disabled">27</div>
            <div class="chrono-day-cell disabled">28</div>
            <div class="chrono-day-cell disabled">29</div>
            <div class="chrono-day-cell disabled">30</div>
            <div class="chrono-day-cell disabled">31</div>
            <div class="chrono-day-cell disabled">1</div>
            <div class="chrono-day-cell disabled">2</div>
            <div class="chrono-day-cell disabled">3</div>
            <div class="chrono-day-cell disabled">4</div>
            <div class="chrono-day-cell disabled">5</div>
            <div class="chrono-day-cell disabled">6</div>
            <div class="chrono-day-cell disabled">7</div>
            <div class="chrono-day-cell disabled">8</div>
            <div class="chrono-day-cell disabled">9</div>
            <div class="chrono-day-cell">10</div>
            <div class="chrono-day-cell">11</div>
            <div class="chrono-day-cell">12</div>
            <div class="chrono-day-cell">13</div>
            <div class="chrono-day-cell">14</div>
            <div class="chrono-day-cell">15</div>
            <div class="chrono-day-cell">16</div>
            <div class="chrono-day-cell">17</div>
            <div class="chrono-day-cell active" data-day="24">24</div>
            <div class="chrono-day-cell" data-day="25">25</div>
            <div class="chrono-day-cell" data-day="26">26</div>
            <div class="chrono-day-cell" data-day="27">27</div>
            <div class="chrono-day-cell" data-day="28">28</div>
            <div class="chrono-day-cell" data-day="29">29</div>
            <div class="chrono-day-cell" data-day="30">30</div>
            <div class="chrono-day-cell" data-day="31">31</div>
          </div>

          <div class="chrono-time-section">
            <div class="chrono-clock-face">
              <svg class="chrono-clock-svg" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="32" fill="#F4EFE6" stroke="#C85A32" stroke-width="2"/>
                <line class="chrono-hour-hand" x1="35" y1="35" x2="35" y2="18" stroke="#C85A32" stroke-width="3" stroke-linecap="round" style="transform-origin: 35px 35px; transform: rotate(60deg); transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);"/>
                <line class="chrono-min-hand" x1="35" y1="35" x2="35" y2="12" stroke="#1F1D1B" stroke-width="2" stroke-linecap="round" style="transform-origin: 35px 35px; transform: rotate(0deg); transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);"/>
                <circle cx="35" cy="35" r="3.5" fill="#C85A32"/>
              </svg>
            </div>

            <div class="chrono-time-slots">
              <div class="chrono-time-chip" data-time="10:00 AM" data-hour-deg="300" data-min-deg="0">10:00 AM</div>
              <div class="chrono-time-chip" data-time="11:30 AM" data-hour-deg="345" data-min-deg="180">11:30 AM</div>
              <div class="chrono-time-chip active" data-time="02:00 PM" data-hour-deg="60" data-min-deg="0">02:00 PM</div>
              <div class="chrono-time-chip" data-time="04:00 PM" data-hour-deg="120" data-min-deg="0">04:00 PM</div>
              <div class="chrono-time-chip" data-time="06:00 PM" data-hour-deg="180" data-min-deg="0">06:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachChronoPopoverInteractivity(targetInputId) {
  const wrapper = document.getElementById(`popover-wrapper-${targetInputId}`);
  if (!wrapper) return;

  const trigger = document.getElementById(`popover-trigger-${targetInputId}`);
  const triggerText = wrapper.querySelector('.popover-trigger-text');
  const hiddenInput = document.getElementById(targetInputId);
  const dayCells = wrapper.querySelectorAll('.chrono-day-cell:not(.disabled)');
  const timeChips = wrapper.querySelectorAll('.chrono-time-chip');
  const hourHand = wrapper.querySelector('.chrono-hour-hand');
  const minHand = wrapper.querySelector('.chrono-min-hand');

  let selectedDay = '24';
  let selectedTime = '02:00 PM';

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    wrapper.classList.toggle('active');
  });

  function updateSummary() {
    const fullValue = `August ${selectedDay}, 2026 @ ${selectedTime}`;
    if (triggerText) triggerText.textContent = fullValue;
    if (hiddenInput) hiddenInput.value = fullValue;
  }

  dayCells.forEach(cell => {
    cell.addEventListener('click', (e) => {
      e.stopPropagation();
      dayCells.forEach(c => c.classList.remove('active'));
      cell.classList.add('active');
      selectedDay = cell.getAttribute('data-day') || cell.textContent.trim();
      updateSummary();
    });
  });

  timeChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      timeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTime = chip.getAttribute('data-time') || '02:00 PM';

      const hourDeg = chip.getAttribute('data-hour-deg') || '0';
      const minDeg = chip.getAttribute('data-min-deg') || '0';

      if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
      if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;

      updateSummary();
    });
  });
}

function initGlobalPopoverClose() {
  document.addEventListener('click', () => {
    document.querySelectorAll('.chrono-popover-wrapper').forEach(w => w.classList.remove('active'));
  });
}

function initStandalonePortfolioChronoPicker() {
  const placeholder = document.getElementById('portfolio-chrono-wrapper');
  if (placeholder) {
    placeholder.innerHTML = buildChronoPopoverHTML('portfolio_consultation_slot');
    attachChronoPopoverInteractivity('portfolio_consultation_slot');
  }
}

/* --------------------------------------------------------------------------
 * 8. Modal Windows (Project Detail & 3D Showcase)
 * -------------------------------------------------------------------------- */
function initModalControllers() {
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  const triggers = document.querySelectorAll('[data-open-modal]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalType = trigger.getAttribute('data-open-modal');
      const itemTitle = trigger.getAttribute('data-project-title') || trigger.getAttribute('data-item-title') || 'Project Showcase';

      if (modalType === 'project-detail') {
        const techStack = trigger.getAttribute('data-tech') || 'HTML5, CSS3, ES6+ JavaScript';
        const demoUrl = trigger.getAttribute('data-demo');

        modalTitle.textContent = itemTitle;
        modalBody.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 1.2rem;">
            <div>
              <span class="label-caps" style="color: var(--terracotta);">Architecture & Tech Stack</span>
              <p style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 700; color: var(--text-espresso); margin-top: 0.2rem;">
                ${techStack}
              </p>
            </div>

            <p style="color: var(--text-muted); font-size: 0.95rem;">
              Engineered using Srivarshan's signature design principles: high-performance scrollytelling narrative sequences, custom Popover Chrono Date Pickers, and multi-state Transporter Dispatch micro-interactions.
            </p>

            ${demoUrl ? `
              <a href="${demoUrl}" target="_blank" class="btn btn-primary" style="margin-top: 0.5rem; text-decoration: none;">
                <span class="material-symbols-outlined">launch</span>
                View Live Repository / Showcase
              </a>
            ` : ''}
          </div>
        `;
      } else if (modalType === 'studio360') {
        modalTitle.textContent = `3D Interactive Model - ${itemTitle}`;
        modalBody.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
            <div style="position: relative; width: 100%; height: 300px; background: var(--bg-cream-elevated); border-radius: 12px; border: 1px solid var(--border-cream); display: flex; align-items: center; justify-content: center; cursor: grab;">
              <canvas id="canvas-portfolio-360" width="500" height="280"></canvas>
              <div style="position: absolute; top: 15px; background: rgba(255,255,255,0.9); padding: 0.4rem 0.8rem; border-radius: 20px; border: 1px solid var(--terracotta); font-family: var(--font-mono); font-size: 0.7rem; color: var(--terracotta);">
                <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">3d_rotation</span>
                Drag mouse to rotate 360° model
              </div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center;">
              Interactive canvas 360° model renderer built with pure HTML5 Canvas context.
            </p>
          </div>
        `;

        const canvas = document.getElementById('canvas-portfolio-360');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          let angle = 45;
          let isDragging = false;
          let startX = 0;

          function renderModel(deg) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((deg * Math.PI) / 180);

            ctx.beginPath();
            ctx.rect(-80, -50, 160, 100);
            ctx.fillStyle = '#c85a32';
            ctx.fill();
            ctx.strokeStyle = '#1f1d1b';
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.restore();
          }

          renderModel(angle);

          canvas.addEventListener('mousedown', (ev) => { isDragging = true; startX = ev.clientX; });
          window.addEventListener('mousemove', (ev) => {
            if (!isDragging) return;
            angle += (ev.clientX - startX) * 0.8;
            startX = ev.clientX;
            renderModel(angle);
          });
          window.addEventListener('mouseup', () => { isDragging = false; });
        }
      }

      backdrop.classList.add('active');
    });
  });

  window.closeModal = function() { backdrop.classList.remove('active'); };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
}
