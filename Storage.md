# 存储

存储是一个非常令人困惑的部分，因为有很多关于基于PCIe/NVMe的设备的混合报告，其中许多报告是基于PCIe/NVMe驱动原生不支持时的旧信息，例如块大小很重要或需要kext /.Efi驱动。嗯，High Sierra为这些类型的驱动器提供了本地支持，但某些驱动器仍然不能工作，如果没有在ACPI级别上移除/屏蔽，可能会导致不稳定。

另一个大问题是，三星NVMe硬盘会降低macOS的运行速度，无法与TRIM兼容，有时甚至会造成不稳定。这是因为macOS不太喜欢三星硬盘上的Phoenix控制器，而更喜欢Sabrent Rocket drives和Western Digital的内部控制器(WD SN750)。最容易看到这是与开机，大多数系统运行三星驱动器将有额外长的启动时间，并有他们的驱动器运行更热，由于软件修剪失败(硬件修剪仍然应该启用，但没有偏心)。此外，一些旧的英特尔驱动器和金士顿NVMe驱动器也经历了这些问题。

虽然不再是一个问题，但请注意，所有苹果的PCIe驱动器都是基于4K扇区的，因此为获得最佳支持，只选择具有此类扇区的驱动器。

**笔记本电脑用户注意**:英特尔ssd并不总是与笔记本电脑很好地兼容，可能会导致问题，尽可能避免

**SSD/机械不支持的选项:**

* 任何基于eMMC的存储(常见于上网本、一些平板电脑和低端电脑型号)。
* 三星PM981和PM991(通常用于笔记本电脑等OEM系统)
  * 即使PM981已经用[NVMeFix](https://github.com/acidanthera/NVMeFix/releases) 1.0.2版本修复，仍然有很多内核异常问题
* Micron 2200S
  * 许多用户报告这个驱动器有引导问题
* SK Hynix PC711
  * 此驱动器上的专有Hynix NVMe控制器根本不受支持，它将无法在macOS中启动

**避免使用的ssd**

三星:

* 三星970 Evo Plus(虽然不是本机支持开箱即用，但[三星的固件更新](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/) 将允许这些驱动器在macOS中运行)

Intel:

* Intel 600p([Intel 600p NVMe驱动有修复吗? #1286](https://github.com/acidanthera/bugtracker/issues/1286))
  * 注意英特尔660p是好的

对于所有NVMe ssd，建议使用 [NVMeFix.kext](https://github.com/acidanthera/NVMeFix) 来修复这些驱动器上的电源和能耗
