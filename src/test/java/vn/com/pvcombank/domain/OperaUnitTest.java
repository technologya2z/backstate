package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class OperaUnitTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(OperaUnit.class);
        OperaUnit operaUnit1 = new OperaUnit();
        operaUnit1.setId(1L);
        OperaUnit operaUnit2 = new OperaUnit();
        operaUnit2.setId(operaUnit1.getId());
        assertThat(operaUnit1).isEqualTo(operaUnit2);
        operaUnit2.setId(2L);
        assertThat(operaUnit1).isNotEqualTo(operaUnit2);
        operaUnit1.setId(null);
        assertThat(operaUnit1).isNotEqualTo(operaUnit2);
    }
}
