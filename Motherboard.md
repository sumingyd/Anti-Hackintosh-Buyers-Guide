# 主板

::: warning 警告

~~目前唯一不支持的主板是AMD的B550主板，它们需要KVM来操作.~~

最近的发展已经用SSDT-CPUR解决了这个问题，参见 [OpenCore安装指南](https://dortania.github.io/OpenCore-Install-Guide/)

:::

所以对于主板，要记住的主要事情是你的系统在运行什么控制器，具体来说:

* 音频接口控制器
* 网络接口控制器(以太网)
* USB控制器
* NVRAM
* iGPU
* RTC vs AWAC
* 内存映射和保护

至于AMD和英特尔的主板:

* **Intel**:
  * 不同的品牌有不同程度的支持，但是总的来说，所有品牌都是可以启动的，前提是你对修补工作没问题(下面提到)。
* **AMD**:
  * 几乎所有的AMD主板都是不利的，因为[启动需要大量的修补操作](https://github.com/AMD-OSX/AMD_Vanilla), ，但是品牌本身不会对macOS的支持有很大影响。
  * 仍然需要牢记对音频和以太网等杂项硬件的支持。

使用 **Intel** 时要避免使用的主要品牌有:

* MSI
  * 奇怪的内存布局，需要KASLR修复，只是真的很差的ACPI编程，许多Z390系统在Clover上无法启动
  * OpenCore可以相对轻松地引导这些系统
* 华擎
  * 非原生USB控制器，奇怪的内存布局
  * USB问题主要是Z390和更老的，Z490没问题
* 技嘉
  * 奇怪的内存布局，需要修复KASLR
  * 以Z390、Z370、Z490为主
* 华硕
  * B460, H470和Z490上的USB问题
  * Z390和更老的都可以

::: tip 推荐

因此，我们对各品牌(英特尔)的总体建议是:

* Z370及以上机型:
  * 技嘉
  * 华硕
  * MSI
* Z390:
  * 华硕
  * 技嘉
* Z490:
  * 华硕
  * 技嘉
  * 华擎

:::

以及要避免的主要平台(为了稳定和易于安装):

* X79
* X99
* X299
* C612
* C621
* C422
* B360 *
* B365 *
* H310 *
* H370 *
* Z390 *
* B460
* H470
* Z490

注意(*):只有在你需要这些功能的情况下，这些在Z370中没有发现或你想超频第9代CPU。大部分的问题已经被纠正了，但它们仍然很混乱，请参见下文。

---

## 音频

有了音频，大多数主板都得到了支持，你可以从 [AppleALC](https://github.com/acidanthera/AppleALC/wiki/Supported-codecs) 找到更广泛的音频列表。 VoodooHDA是老用户的另一个选择

**注意**:如果您计划使用板载麦克风头，AMD主板用户将需要VoodooHDA。常规的音频输出可以在AppleALC上正常工作

---

## 以太网

对于以太网，基本上支持所有千兆网卡(更多信息见下文)

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
  * 适用于大多数英特尔控制器
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
  * 用于通常在AMD主板上发现的I211-AT
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
  * 适用于大多数Atheros控制器
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
  * 用于Realtek的千兆以太网
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
  * 用于Realtek的2.5Gb以太网

对于传统的以太网控制器，你有两个选择(使用这些芯片的系统通常来自Core i系列处理器之前的时代):

* [AppleIntelE1000e.kext](https://github.com/chris1111/AppleIntelE1000e)
* [https://github.com/Mieze/RealtekRTL8100](https://github.com/Mieze/RealtekRTL8100)

**注意**:Realtek L8200A完全不受支持，完整列表请参阅[网络部分](/Networking.md)

**注2**:对于那些计划购买英特尔Z490板的人，请注意，i225-V网卡不支持正式的设备id欺骗。可以在这里找到这个例子: [Comet Lake i225-V spoof](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#starting-point)

---

## USB

对于USB来说，事情非常简单，大多数Ryzen/Matisse, Intel和AsMedia控制器都是开箱即用的，除了一个 [USB 映射](https://sumingyd.github.io/OpenCore-Post-Install/usb/)之外，不需要其他配置。对于使用Intel cpu的AsRock用户，您需要使用 XHCI-unsupported.kext(可以在[RehabMan's USBInjectAll's项目](https://github.com/RehabMan/OS-X-USB-Inject-All)中找到。 许多H370、B360、H310和X79/X99/X299用户也可以从中受益

**AMD特别说明**:由于macOS构建usb的方式，它们**必须**在ACPI表的某个地方定义。由于某些原因，许多AMD主板忘记了这一点，用户最终会有很多坏掉的USB端口。有一个修复方法，但它涉及手动将端口添加到[DSDT或SSDT](https://sumingyd.github.io/OpenCore-Post-Install/usb/).

**特殊华硕400系列注意**:由于华硕打破了ACPI规范，您需要使用[SSDT-RHUB](https://sumingyd.github.io/Getting-Started-With-ACPI/) 重置您的端口。

---

## NVRAM

对于NVRAM，由于 [SSDT-PMC](https://sumingyd.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PMC.dsl)，消费者平台的问题已经基本解决。主要涉及以下产品(注:Z490等400系列不包括在内):

* Z390
* H370
* B360
* H310

然而，有些主板不支持NVRAM，主要是HEDT和服务器板:

* C612
* C621
* C422
* X79
* X99
* X299(华硕有可用的NVRAM)

---

## iGPU

所以关于Coffee Lake有趣的部分是，英特尔改变了iGPU的显示方式。特别是macOS不知道如何正确地处理它们。有一个修复，但需要[通过WhateverGreen手动打BusID补丁](https://sumingyd.github.io/OpenCore-Install-Guide/extras/gpu-patches.html). 主要受害者:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310

注意，Z370不在名单上，这是因为主板基本上是一个Z270，所以苹果的视频地图可以很好地使用它

---

## RTC vs AWAC

在RTC和AWAC的对比中，macOS完全不会在时钟使用AWAC的系统中启动，大多数BIOS gui甚至不显示更改它的选项。这主要出现在以下几点:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310
* Z370(主要是Gigabyte和AsRock，因为他们向后移植了时钟。其他板都可以)
* X299(主要是第10代cpu发布的，AsRock和Gigabyte是两个主要的罪犯)
  * 华硕已经将AWAC移植到2017年的主板上，但从未更新BIOS，请注意。

所以我们需要:

* [使用SSDT强制RTC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-AWAC-DISABLE.dsl),
* [创建一个假的系统时钟](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-RTC0.dsl)
* [修补程序](https://www.hackintosh-forum.de/forum/thread/39846-asrock-z390-taichi-ultimate/?pageNo=2)

你可以在这里找到更多关于**如何**修复它的信息:[ACPI入门](https://sumingyd.github.io/Getting-Started-With-ACPI/)

---

## 内存映射和保护

受此影响的主要用户:

* C612 (通常出现在服务器板上)
* C621
* C422
* X79
* X99
* X299
* B360
* B365
* H310
* H370
* Z390
* B460
* H470
* Z490

这些平台面临的问题是，许多平台依赖于OsxAptioFix2Drv-free2000，这现在被认为是对你的系统的破坏，这意味着基于它的构建指南现在是无效的。更多信息可以在[这里](https://www.reddit.com/r/hackintosh/comments/cfjyla/i_unleashed_a_plague_upon_you_guys_and_i_am_sorry/)找到。这些问题可以通过计算你的slide值来缓解:[理解并修复“cannot allocate runtime area”错误](https://sumingyd.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html)

但更有趣的是，英特尔引入了内存保护机制，这意味着AptioMemoryFix/OpenCore提供的许多固件修复程序完全被破坏了。特别是提供的任何内存补丁都会被覆盖，这意味着它们永远不会被使用。幸运的是，OpenCore引入了一个名为`ProtectUefiServices`的新选项，它可以通过确保补丁即使在重置后仍被应用来解决这个问题。
