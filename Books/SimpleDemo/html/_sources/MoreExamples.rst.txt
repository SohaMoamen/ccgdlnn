.. raw:: html

   <script>ODSA.SETTINGS.MODULE_SECTIONS = ['click-handlers', 'exercise-stack', 'automatic-node-resize', 'mathjax'];</script>

.. _MoreExamples:


.. raw:: html

   <script>ODSA.SETTINGS.DISP_MOD_COMP = true;ODSA.SETTINGS.MODULE_NAME = "MoreExamples";ODSA.SETTINGS.MODULE_LONG_NAME = "Click Handlers and Special Features";ODSA.SETTINGS.MODULE_CHAPTER = "Simple Demonstration Examples"; ODSA.SETTINGS.BUILD_DATE = "2021-10-24 13:00:15"; ODSA.SETTINGS.BUILD_CMAP = false;JSAV_OPTIONS['lang']='en';JSAV_EXERCISE_OPTIONS['code']='java';</script>


.. |--| unicode:: U+2013   .. en dash
.. |---| unicode:: U+2014  .. em dash, trimming surrounding whitespace
   :trim:


.. This file is part of the OpenDSA eTextbook project. See
.. http://opendsa.org for more details.
.. Copyright (c) 2012-2020 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Cliff Shaffer

Click Handlers and Special Features
===================================

Click Handlers
--------------

Occasionally in an interactive visualization, and certainly in any
interactive exercise you will need a click handler to support the
interaction with graphical elements on the canvas. Here is a variety
of examples.

.. avembed:: AV/SimpleDemo/ClickHandlerTest.html ss
   :module: MoreExamples
   :points: 0.0
   :required: False
   :threshold: 1
   :exer_opts: JXOP-debug=true&amp;JOP-lang=en&amp;JXOP-code=java

Exercise Stack
--------------

Demo for a special stack display style that gets used in some
exercises to show the user input values to be dealt with.

.. avembed:: AV/SimpleDemo/stackTest.html ss
   :module: MoreExamples
   :points: 0.0
   :required: False
   :threshold: 1
   :exer_opts: JXOP-debug=true&amp;JOP-lang=en&amp;JXOP-code=java

Automatic node resize
---------------------

Nodes more-or-less automatically resize to match the value
string.

.. avembed:: AV/SimpleDemo/autonodes.html ss
   :module: MoreExamples
   :points: 0.0
   :required: False
   :threshold: 1
   :exer_opts: JXOP-debug=true&amp;JOP-lang=en&amp;JXOP-code=java

.. raw:: html

   <a id="todo0"></a>

.. TODO::
  type: Visualization
   This would be better if there was padding on the string, and if it
   were better centered vertically. It also only works because we
   leave out lib/odsaStyle.css. This should get fixed to work with
   that. Finally, it ought to be a diagram, not a standalone AV.
   
MathJAX
-------

Examples of using MathJAX.

.. avembed:: AV/SimpleDemo/mathjax_test.html ss
   :module: MoreExamples
   :points: 0.0
   :required: False
   :threshold: 1
   :exer_opts: JXOP-debug=true&amp;JOP-lang=en&amp;JXOP-code=java

.. raw:: html

   <a id="todo1"></a>

.. TODO::
  type: Visualization
   This could be cleaned up a bit.


