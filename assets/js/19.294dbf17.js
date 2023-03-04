(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{297:function(e,t,r){"use strict";r.r(t);var n=r(10),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[e._v("#")]),e._v(" 存储")]),e._v(" "),t("p",[e._v("存储是一个非常令人困惑的部分，因为有很多关于基于PCIe/NVMe的设备的混合报告，其中许多报告是基于PCIe/NVMe驱动原生不支持时的旧信息，例如块大小很重要或需要kext /.Efi驱动。嗯，High Sierra为这些类型的驱动器提供了本地支持，但某些驱动器仍然不能工作，如果没有在ACPI级别上移除/屏蔽，可能会导致不稳定。")]),e._v(" "),t("p",[e._v("另一个大问题是，三星NVMe硬盘会降低macOS的运行速度，无法与TRIM兼容，有时甚至会造成不稳定。这是因为macOS不太喜欢三星硬盘上的Phoenix控制器，而更喜欢Sabrent Rocket drives和Western Digital的内部控制器(WD SN750)。最容易看到这是与开机，大多数系统运行三星驱动器将有额外长的启动时间，并有他们的驱动器运行更热，由于软件修剪失败(硬件修剪仍然应该启用，但没有偏心)。此外，一些旧的英特尔驱动器和金士顿NVMe驱动器也经历了这些问题。")]),e._v(" "),t("p",[e._v("虽然不再是一个问题，但请注意，所有苹果的PCIe驱动器都是基于4K扇区的，因此为获得最佳支持，只选择具有此类扇区的驱动器。")]),e._v(" "),t("p",[t("strong",[e._v("笔记本电脑用户注意")]),e._v(":英特尔ssd并不总是与笔记本电脑很好地兼容，可能会导致问题，尽可能避免")]),e._v(" "),t("p",[t("strong",[e._v("SSD/机械不支持的选项:")])]),e._v(" "),t("ul",[t("li",[e._v("三星PM981和PM991(常见于笔记本电脑等OEM系统)\n"),t("ul",[t("li",[e._v("即使PM981已经用"),t("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix"),t("OutboundLink")],1),e._v(" 1.0.2版本修复，仍然有很多内核异常问题")])])]),e._v(" "),t("li",[e._v("Micron 2200S\n"),t("ul",[t("li",[e._v("许多用户报告这个驱动器有引导问题")])])]),e._v(" "),t("li",[e._v("SK Hynix PC711\n"),t("ul",[t("li",[e._v("此驱动器上的专有Hynix NVMe控制器根本不受支持，它将无法在macOS中启动")])])])]),e._v(" "),t("p",[t("strong",[e._v("避免使用的ssd")])]),e._v(" "),t("p",[e._v("三星:")]),e._v(" "),t("ul",[t("li",[e._v("三星970 Evo Plus(虽然不是本机支持开箱即用，但"),t("a",{attrs:{href:"https://www.samsung.com/semiconductor/minisite/ssd/download/tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("三星的固件更新"),t("OutboundLink")],1),e._v(" 将允许这些驱动器在macOS中运行)")])]),e._v(" "),t("p",[e._v("Intel:")]),e._v(" "),t("ul",[t("li",[e._v("Intel 600p("),t("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/1286",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel 600p NVMe驱动有修复吗? #1286"),t("OutboundLink")],1),e._v(")\n"),t("ul",[t("li",[e._v("注意英特尔660p是好的")])])])]),e._v(" "),t("p",[e._v("对于所有NVMe ssd，建议使用 "),t("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix.kext"),t("OutboundLink")],1),e._v(" 来修复这些驱动器上的电源和能耗")])])}),[],!1,null,null,null);t.default=a.exports}}]);