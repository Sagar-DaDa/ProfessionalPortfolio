import React from "react";

const NotificationType = {
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
  TOAST: "toast",
};

const notificationSelector = (type) => {
  switch (type) {
    case NotificationType.SUCCESS:
      return notificationStyle.success;

    case NotificationType.WARNING:
      return notificationStyle.warning;

    case NotificationType.INFO:
      return notificationStyle.info;

    case NotificationType.TOAST:
      return notificationStyle.toast;

    default:
      return notificationStyle.none;
  }
};

const notificationStyle = {
  none: {},
  success: {
    faIconClass: "fa-solid fa-check",
    color: { color: "#f8f9fad9" },
    styles: {
      backgroundColor: "#6c757dd9",
      color: "#f8f9fad9",
    },
    innerLeft: {
      backgroundColor: "#1A5D1Ad9",
    },
  },
  warning: {
    faIconClass: "fa-solid fa-exclamation",
    color: { color: "#f8f9fab9" },
    styles: {
      backgroundColor: "#6c757ad9",
      color: "#f8f9fad9",
    },
    innerLeft: {
      backgroundColor: "#bb2124a9",
    },
  },
  info: {
    faIconClass: "fa-solid fa-info",
    color: { color: "#f8f9fab9" },
    styles: {
      backgroundColor: "#6c757ad9",
      color: "#f8f9fad9",
    },
    innerLeft: {
      backgroundColor: "#00337Ca9",
      display: "none",
    },
  },
  toast: {
    faIconClass: null,
    color: { color: "#f8f9fab9" },
    styles: {
      backgroundColor: "#6c757ad9",
      color: "#f8f9fad9",
    },
    innerLeft: {
      backgroundColor: "#00337Ca9",
      display: "none",
    },
  },
};

export default function Notification(props) {
  let style = notificationSelector(props.notification.type);
  // console.log('[CUSTOM] Notification.js - props.notificationType: ' + notificationStyle.styles);
  return (
    <div
      className="rounded position-fixed start-50 bottom-0 translate-middle zindex-200 text-nowrap"
      style={{ ...style.styles }}
    >
      <div
        className={`${
          props.notification.type === NotificationType.TOAST
            ? "d-none"
            : "d-inline-block"
        } py-2 px-3 rounded-start`}
        style={style.innerLeft}
      >
        <i className={style.faIconClass}></i>
      </div>
      <div className="d-inline-block py-2 px-3  rounded-end">
        <span>{props.notification.message}</span>
      </div>
    </div>
  );
}

export { NotificationType };
